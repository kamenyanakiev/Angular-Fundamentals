import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const url = this.getUrl();
    return this.http.get(url);
  }

  find(courseId): Observable<any> {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course): Observable<any> {
    return this.http.post(this.getUrl(), course);
  }

  update(course): Observable<any> {
    console.log('update course', course);
    return this.http.put(`${this.getUrlById(course.id)}`, course);
  }

  delete(courseId): Observable<any> {
    console.log(this.getUrlById(courseId));
    return this.http.delete(`${this.getUrlById(courseId)}`);
  }

  private getUrl(): string {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id): string {
    return `${this.getUrl()}/${id}`;
  }
}
