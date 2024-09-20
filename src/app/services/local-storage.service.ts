import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ColumnType, TaskType } from '../../types/types';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageChangeSubject = new Subject<void>();
  private platformID = inject(PLATFORM_ID);

  get columns(): ColumnType[] {
    let localColumns: ColumnType[] = [];

    if (isPlatformBrowser(this.platformID)) {
      const _columns = localStorage.getItem('columns');

      if (_columns) {
        localColumns = JSON.parse(_columns);
      }
    }

    return localColumns;
  }

  set columns(newColumns) {
    if (isPlatformBrowser(this.platformID)) {
      localStorage.setItem('columns', JSON.stringify(newColumns));
      this.storageChangeSubject.next();
    }
  }

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
