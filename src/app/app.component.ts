import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from '../components/task/task.component';
import { Column } from '../components/column/column.component';
import { ColumnContainer } from '../components/column-container/column-container.component';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColumnContainer, CommonModule, DialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Dialog],
})
export class AppComponent {
  title = 'task-tracker';
}
