import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TaskType } from '../../types/types';

@Component({
  selector: 'task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CommonModule, DragDropModule],
})
export class Task {
  task = input<TaskType>({ title: '', status: '' });
}
