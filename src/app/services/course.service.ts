import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public couresUrl = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}

  //Courses api
  getCourseList() {
    return this.http.get(this.couresUrl);
  }
}
