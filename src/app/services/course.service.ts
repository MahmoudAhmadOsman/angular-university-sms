import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  //Courses enviroment variable
  // private coursesUrl = environment.apiBaseUril + "/courses";
  
  public baseUrl = 'https://stapes-api.onrender.com/courses';
  constructor(private http: HttpClient) {}

  //Courses api
  getCourseList() {
    return this.http.get(this.baseUrl);
  }
}
