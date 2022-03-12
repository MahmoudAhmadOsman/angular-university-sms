import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public signUpForm: any;
  constructor(
    private register: RegisterService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
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

  // Save New User Data

  saveNewUser(): void {
    // console.log(this.registerUser.value);
    this.register.saveNewUserData(this.signUpForm.value).subscribe(
      (result) => {
        this.signUpForm.reset({});
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
