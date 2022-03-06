import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  public successMessage: boolean = false;
  addStudent: any;
  constructor(private student: StudentService, private router: Router) {}
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
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      schoolName: new FormControl('', Validators.required),
      scholarship: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
    });
  }

  //Save form data
  SaveData() {
    console.log(this.addStudent.value);
    //save the data into the json file
    this.student.saveStudentData(this.addStudent.value).subscribe((result) => {
      console.log(result);
      this.addStudent.reset({});
      this.successMessage = true;
      // this.router.navigate(['/students']);
    });

    setTimeout(() => {
      this.router.navigate(['/students']);
    }, 5000);
  }
}
