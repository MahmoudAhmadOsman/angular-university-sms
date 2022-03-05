import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public courses: any = [];

  constructor(private course: CourseService) {}

  ngOnInit(): void {
    this.course.getCourseList().subscribe((data) => {
      // console.log(data);
      this.courses = data;
    });
  }
}
