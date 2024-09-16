import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskEvent, TaskType } from '../../types/types';

@Component({
  selector: 'add-task-dialog',
  standalone: true,
  styleUrl: './add-task-dialog.component.css',
  templateUrl: './add-task-dialog.component.html',
  imports: [DialogModule, ReactiveFormsModule],
})
export class AddTaskDialog {
  dialogRef = inject<DialogRef<TaskEvent>>(DialogRef<TaskType>);
  data = inject<string>(DIALOG_DATA);

  constructor(private formBuilder: FormBuilder) {}

  addTaskFormGroupControl = this.formBuilder.group({
    title: [
      '',
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    description: [''],
  });

  onAddTask() {
    const { description, title } = this.addTaskFormGroupControl.value;
    if (!title) {
      return;
    }

    this.dialogRef.close({
      title,
      description: description ?? '',
      colId: this.data,
    });
  }

  onTextBoxChange(event: any) {
    console.log(event);
  }
}
