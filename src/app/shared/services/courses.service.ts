import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      description: 'Learn the fundamentals of JavaScript',
      percentComplete: 50,
      favorite: true,
    },
  ];

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const url = this.getUrl();
    return this.http.get(url);
  }

  find(courseId) {}

  create(course): Observable<any> {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    console.log('update course', course);
  }

  delete(courseId) {
    console.log('delete course', courseId);
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}
