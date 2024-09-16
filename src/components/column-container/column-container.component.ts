import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'column-container',
  standalone: true,
  templateUrl: './column-container.component.html',
  styleUrl: './column-container.component.css',
  imports: [CommonModule, DragDropModule, DialogModule, Column, AddTaskDialog],
})
export class ColumnContainer {
  columnId: string = '';
  dialog = inject(Dialog);
  columns: ColumnType[] = [
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
  }
}
