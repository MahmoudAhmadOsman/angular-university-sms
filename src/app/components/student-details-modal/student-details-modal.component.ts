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
    // console.log('Student Details #: ', this.route.snapshot.params['id']);
    this.showStudentDetails();
  }

  showStudentDetails() {
    console.log(
      'Pramiterized User Details Route: ',
      this.route.snapshot.params['id']
    );

    //    this.student.showStudentDetails(this.route.snapshot.params['id']).subscribe((result) => {
    //      console.log(result);
    //      console.log('Student Details #: ', this.route.snapshot.params['id']);

    //   // this.router.navigate(['/students']);
    // });
    // const id = this.route.snapshot.params['id'];
    this.student.getStudentById(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.studentDetails = data;
        // console.log('Student Details: ', data);
      },
      (error) => {
        console.log(
          'Error occured while fetching student details',
          error.message
        );
      }
    );
  }
}
