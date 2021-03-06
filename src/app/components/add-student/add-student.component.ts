import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudent: any;
  // imgFile: any;
  public url = 'assets/images/no-image.png';
  constructor(
    private student: StudentService,
    private router: Router,
    private toast: NgToastService
  ) { }
  // addStudent = new FormGroup({
  //   firstName: new FormControl('', [Validators.required]),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   school: new FormControl(''),
  //   scholarship: new FormControl(''),
  //   avatar: new FormControl(''),
  // });


  ngOnInit(): void {
    this.addStudent = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      schoolName: new FormControl('', Validators.required),
      scholarship: new FormControl('', Validators.required),
      // avatar: new FormControl('', Validators.required),
    });
  }

  //Save form data
  SaveData() {
    //save the data into the json file
    this.student.saveStudentData(this.addStudent.value).subscribe(
      (result) => {
        this.addStudent.reset({});
        this.toast.success({
          detail: 'Success',
          summary: 'Record has been created successfully!',
          duration: 5000,
        });
        this.router.navigate(['/students']);
      },
      (error) => {
        this.toast.error({
          detail: 'Error',
          summary: 'Unable to create this record!!',
          duration: 5000,
        });
      }
    );
  }
}
