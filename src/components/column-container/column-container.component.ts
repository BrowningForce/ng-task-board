import { Component, Inject, inject } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from '../column/column.component';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AddTaskDialog } from '../add-task-dialog/add-task-dialog.component';
import { ColumnType, TaskEvent } from '../../types/types';
import { LocalStorageService } from '../../app/services/local-storage.service';

@Component({
  selector: 'column-container',
  standalone: true,
  templateUrl: './column-container.component.html',
  styleUrl: './column-container.component.css',
  imports: [CommonModule, DragDropModule, DialogModule, Column, AddTaskDialog],
})
export class ColumnContainer {
  dialog = inject(Dialog);
  private localStorageService = inject(LocalStorageService);
  columns: ColumnType[] = [];

  ngOnInit() {
    if (this.localStorageService.columns.length > 0) {
      this.columns = this.localStorageService.columns;
    } else {
      this.localStorageService.columns = [
        {
          title: 'Backlog',
          tasks: [],
          id: 'backlog',
        },
        {
          title: 'To Do',
          tasks: [
            {
              title: 'Make tasks come from local storage',
              status: 'to_do',
              description: '',
            },
          ],
          id: 'to_do',
        },
        { title: 'In Progress', tasks: [], id: 'in_progress' },
        { title: 'Done', tasks: [], id: 'done' },
      ];

      this.columns = this.localStorageService.columns;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.localStorageService.columns = this.columns;
  }

  openDialog(event: string) {
    const dialogRef = this.dialog.open<TaskEvent>(AddTaskDialog, {
      width: '250px',
      data: event,
    });
    dialogRef.closed.subscribe((result) => {
      if (!result) return;
      this.onAddTask(result);
    });
  }

  onAddTask(event: TaskEvent) {
    const targetColumn = this.columns.find((col) => col.id === event.colId)!;

    targetColumn.tasks.push({
      title: event.title,
      status: event.colId,
      description: event.description,
    });

    this.localStorageService.columns = this.columns;
    this.columns = this.localStorageService.columns;
  }
}
