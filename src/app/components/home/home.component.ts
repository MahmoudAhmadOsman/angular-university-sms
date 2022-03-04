import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public courses: any = [];

  constructor(private course: CourseService) {}

  ngOnInit(): void {
    this.course.getCourseList().subscribe((data) => {
      console.log(data);
      this.courses = data;
    });
  }
}
