import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public url = 'http://localhost:3000/students';
  constructor(private http: HttpClient, private courseHttp: HttpClient) {}

  //Get student list
  getAllStudent() {
    return this.http.get(this.url);
  }

  //Save student data
  saveStudentDate(data: any) {
    return this.http.post(this.url, data);
  }
}
