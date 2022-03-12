import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css'],
})
export class LoginStudentComponent implements OnInit {
  public loginForm: any = FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,

    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  processRegisterForm(): void {
    // console.log('Process Register Form');
    this.http
      .get<any>('https://custom-states-api.herokuapp.com/users')
      .subscribe(
        (res) => {
          const user = res.find((a: any) => {
            return (
              a.email === this.loginForm.value.email &&
              a.password === this.loginForm.value.password
            );
          });

          if (user) {
            this.loginForm.reset({});
            this.toast.success({
              detail: 'Success',
              summary: 'Logged in successfully!!',
              duration: 5000,
            });
            this.router.navigate(['/students']);
          } else {
            this.toast.error({
              detail: 'Error',
              summary: 'Unable to login with this credentials!!',
              duration: 5000,
            });
          }
        },
        (error) => {
          this.toast.error({
            detail: 'Error',
            summary: 'Something went wrong!!',
            duration: 5000,
          });
        }
      );
  }
}
