import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  public students: any = [];

  public deleteMessage: boolean = false;

  constructor(private student: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((data) => {
      // console.log(data);
      this.students = data;
    });
  }

  //Delete student
  deleteStudent(student_id: any) {
    this.student.deleteStudent(student_id).subscribe((data) => {
      // this.ngOnInit();
        this.deleteMessage = true;
      this.router.navigate(['/students']);
    
    });
  }
}
