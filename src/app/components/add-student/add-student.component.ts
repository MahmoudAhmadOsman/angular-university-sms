import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  constructor(private student: StudentService, private router: Router) {}

  //1.name your form
  //2. use FormGroup directive as an object
  //3. get each form name and use FormControl directive
  //4. bind this form in the template html form

  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  ngOnInit(): void {}

  //Save form data
  SaveData() {
    console.log(this.addStudent.value);
    //now, save the data into the json file
    this.student.saveStudentData(this.addStudent.value).subscribe((result) => {
      this.addStudent.reset({});
      this.router.navigate(['/students']);
    });
  }
}
