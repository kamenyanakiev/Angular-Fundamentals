import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson = null;
  courseLessons = null;

  constructor(private lessonService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonService.all();
  }

  selectLesson(lesson) {
    console.log(lesson);
    this.currentLesson = lesson;
  }
}
