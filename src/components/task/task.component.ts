import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CommonModule, DragDropModule],
})
export class Task {
  @Input() task = { title: '', status: '' };
}
