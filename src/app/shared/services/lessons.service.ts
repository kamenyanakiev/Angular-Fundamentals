import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private lessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() {}

  all() {
    return this.lessons;
  }

  find(lesson) {}

  create(lesson) {
    console.log('create lesson', lesson);
  }

  update(lesson) {
    console.log('update lesson', lesson);
  }

  delete(lesson) {
    console.log('delete lesson', lesson);
  }
}
