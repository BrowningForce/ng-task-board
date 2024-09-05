import { Component, inject } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from '../column/column.component';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AddTaskDialog } from '../add-task-dialog/add-task-dialog.component';

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
  columns = [
    {
      title: 'Backlog',
      tasks: [
        { title: 'Add more tasks', status: 'backlog' },
        { title: 'Some more work ahead', status: 'backlog' },
      ],
      id: 'backlog',
    },
    {
      title: 'To Do',
      tasks: [{ title: 'Identify container', status: 'to_do' }],
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
    const dialogRef = this.dialog.open<string>(AddTaskDialog, {
      width: '250px',
      data: event,
    });
    dialogRef.closed.subscribe((result) => {
      console.log(result);
    });
  }
}
