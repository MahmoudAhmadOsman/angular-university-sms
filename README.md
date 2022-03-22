# Student Management System

- Built with Angular, bootstrap 5 & json web server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Snippet

##### Student List Class Component

```bash
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
  public darkTheme: boolean = false;

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


  deleteStudent(student_id: any) {
    alert('Are you sure you want to delete this student?');
    this.student.deleteStudent(student_id).subscribe(
      (data) => {
        this.ngOnInit();
        this.toast.warning({
          detail: 'Deleted',
          summary: 'Record has been deleted successfully!',
          duration: 5000,
        });
        this.router.navigate(['/students']);
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
```

## Contributing

Please, feel free to contrubute to this and correct me if you see anything wrong about this project or if you have any sugguestions that would also welcomed.

### My Website

Please, visit my website
[mahmoudosman.com](http://www.mahmoudosman.com/)

### Social Media

LinkedIn Profile Link: [LinkedIn](https://www.linkedin.com/in/mahmoudaoman/)
