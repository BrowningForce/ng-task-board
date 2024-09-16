import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskType } from '../../types/types';

@Component({
  selector: 'task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CommonModule, DragDropModule],
})
export class Task {
  @Input() task: TaskType = { title: '', status: '' };
}
