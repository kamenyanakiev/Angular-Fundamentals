import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent {
  @Input() courseLessons;
  @Input() title;
  @Output() selectLesson = new EventEmitter();
}
