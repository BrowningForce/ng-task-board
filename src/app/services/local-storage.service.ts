import { Injectable } from '@angular/core';
import { TaskType } from '../../types/types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageChangeSubject = new Subject<void>();
  constructor() {}

  get tasks(): TaskType[] {
    let localTasks: TaskType[] = [];
    const _tasks = localStorage.getItem('tasks');
    if (_tasks) {
      localTasks = JSON.parse(_tasks);
    }

    return localTasks;
  }

  set tasks(newTasks: TaskType[]) {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    this.storageChangeSubject.next();
  }
}
