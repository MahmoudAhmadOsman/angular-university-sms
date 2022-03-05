import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details-modal',
  templateUrl: './student-details-modal.component.html',
  styleUrls: ['./student-details-modal.component.css'],
})
export class StudentDetailsModalComponent implements OnInit {
  public studentDetails: any;
  constructor(private student: StudentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showStudentDetails();
  }

  showStudentDetails() {
    console.log(
      'Pramiterized User Details Route: ',
      this.route.snapshot.params['id']
    );

    this.student.getStudentById(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.studentDetails = data;
        // console.log('Student Details: ', data);
      },
      (error) => {
        console.log('Error', error.message);
      }
    );
  }
}
