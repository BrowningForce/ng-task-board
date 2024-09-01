import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.component';
import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'task-column',
  imports: [Task, CdkDropList, CommonModule, DragDropModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css',
})
export class Column {
  @Input() column: {
    id: string;
    title: string;
    tasks: Array<{ title: string; status: string }>;
  } = { id: 'temp', title: '', tasks: [] };

  @Output() drop = new EventEmitter();

  onTaskDropped(
    event: CdkDragDrop<
      { title: string; status: string }[],
      { title: string; status: string }
    >
  ) {
    this.drop.emit(event);
  }
}
