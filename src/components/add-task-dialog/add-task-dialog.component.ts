import { Component, inject } from '@angular/core';
import {
  Dialog,
  DIALOG_DATA,
  DialogModule,
  DialogRef,
} from '@angular/cdk/dialog';

export interface DialogData {
  title: string;
  colId: string;
}

@Component({
  selector: 'add-task-dialog',
  standalone: true,
  styleUrl: './add-task-dialog.component.css',
  templateUrl: './add-task-dialog.component.html',
  imports: [DialogModule],
})
export class AddTaskDialog {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  data = inject(DIALOG_DATA);

  onAddTask(event: any) {}
}
