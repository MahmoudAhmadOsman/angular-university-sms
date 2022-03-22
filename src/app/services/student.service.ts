import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //Students enviroment variable
  // private apiServerUrl = environment.apiBaseUril + "/students";
  public baseUrl ="https://custom-states-api.herokuapp.com/students";

  constructor(private http: HttpClient, private courseHttp: HttpClient) { }

  //Get api endpoint
  getAllStudent() {
    return this.http.get(this.baseUrl);
  }

  //Save restAPI endpoint
  saveStudentData(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  //Delete restAPI endpoint
  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //Get by restAPI endpoint
  getStudentById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //Update restAPI endpoint
  updateStudentData(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
