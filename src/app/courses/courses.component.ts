import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../shared/models/course.model';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course;
  courses$: Observable<Course[]> = this.coursesService.getAll();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    // this.coursesService.getAll().subscribe((courses: Course[]) => {
    //   return (this.courses = courses);
    // });
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectedCourse = emptyCourse;
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    } else {
      this.coursesService
        .create(course)
        .subscribe((result) => this.loadCourses());
    }
  }

  loadCourses(): void {
    this.courses$ = this.coursesService.getAll();
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
