import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  public students: any = [];

  constructor(private student: StudentService) {}

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((data) => {
      console.log(data);
      this.students = data;
    });
  }
}
