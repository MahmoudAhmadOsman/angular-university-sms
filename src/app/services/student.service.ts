import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public url = 'http://localhost:3000/students';
  // public url = 'https://custom-states-api.herokuapp.com/students';
  constructor(private http: HttpClient, private courseHttp: HttpClient) {}

  //Get api
  getAllStudent() {
    return this.http.get(this.url);
  }

  //Save api
  saveStudentData(data: any) {
    return this.http.post(this.url, data);
  }

  //Delete api
  deleteStudent(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  //Update api

  getStudentById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  //Update api

  updateStudentData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
