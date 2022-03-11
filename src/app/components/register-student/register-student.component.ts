import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  registerUser: any;
  constructor(
    private register: RegisterService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.registerUser = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  // Save New Use Data

  saveNewUser(): void {
    // alert('Working on it!!!!!!!');
    console.log(this.registerUser.value);
    this.register.saveNewUserData(this.registerUser.value).subscribe(
      (result) => {
        this.registerUser.reset({});
        this.toast.success({
          detail: 'Success',
          summary: 'User has been registered successfully!',
          duration: 5000,
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        this.toast.error({
          detail: 'Error',
          summary: 'Unable to register this user!!',
          duration: 5000,
        });
      }
    );
  }
}
