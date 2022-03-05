import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  public upatedMessage: boolean = false;

  constructor(
    private student: StudentService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  editStudent = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    schoolName: new FormControl(''),
    scholarship: new FormControl(''),
    avatar: new FormControl(''),
  });

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.student
      .getStudentById(this.router.snapshot.params['id'])
      .subscribe((data: any) => {
        this.editStudent = new FormGroup({
          firstName: new FormControl(data['firstName']),
          lastName: new FormControl(data['lastName']),
          email: new FormControl(data['email']),
          phone: new FormControl(data['phone']),
          schoolName: new FormControl(data['schoolName']),

          scholarship: new FormControl(data['scholarship']),
          avatar: new FormControl(data['avatar']),
        });
      });
  }

  UpdateData() {
    // console.log('Edit student value: ', this.editStudent.value);
    this.student
      .updateStudentData(
        this.router.snapshot.params['id'],
        this.editStudent.value
      )
      .subscribe((data) => {
        console.log('Record has been updated', data);
        this.route.navigate(['/students']);
      });
  }
}
