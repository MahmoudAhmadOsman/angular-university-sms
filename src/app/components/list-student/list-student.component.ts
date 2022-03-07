import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  public students: any = [];
  public loading: boolean = true;

  dtOptions: DataTables.Settings = {};

  constructor(
    private student: StudentService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 30,
      processing: true,
    };

    this.student.getAllStudent().subscribe((data) => {
      this.students = data;
      this.loading = false;
    });
  }

  //Delete student
  deleteStudent(student_id: any) {
    alert('Are you sure you want to delete this student?');
    this.student.deleteStudent(student_id).subscribe(
      (data) => {
        this.ngOnInit(); //rm later
        this.toast.warning({
          detail: 'Deleted',
          summary: 'Record was successfully deleted!',
          duration: 5000,
        });
        // this.router.navigate(['/students']);
      },
      (error) => {
        this.toast.error({
          detail: 'Error',
          summary: 'Unable to delete this record!!',
          duration: 5000,
        });
      }
    );
  }
}
