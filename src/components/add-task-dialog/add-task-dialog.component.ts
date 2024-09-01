import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';

export interface DialogData {
  title: string;
  colId: string;
}

@Component({
  selector: 'add-task-dialog',
  standalone: true,
  imports: [DialogModule],
  styleUrl: './add-task-dialog.component.css',
  templateUrl: './add-task-dialog.component.html',
})
export class AddTaskDialog {
  dialog = inject(DIALOG_DATA);
}
