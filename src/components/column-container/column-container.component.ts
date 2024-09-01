import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from '../column/column.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'column-container',
  standalone: true,
  templateUrl: './column-container.component.html',
  styleUrl: './column-container.component.css',
  imports: [CommonModule, DragDropModule, Column],
})
export class ColumnContainer {
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
}
