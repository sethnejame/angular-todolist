import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Clean house',
        completed: false
      },
      {
        id: 2,
        title: 'Drink beer',
        completed: true
      },
      {
        id: 3,
        title: 'Go to work',
        completed: true
      }
    ];
  }
}
