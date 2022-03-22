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
  private apiServerUrl = environment.apiBaseUril + "/students";

  constructor(private http: HttpClient, private courseHttp: HttpClient) { }

  //Get api
  getAllStudent() {
    return this.http.get(this.apiServerUrl);
  }

  //Save restAPI endpoint
  saveStudentData(data: any) {
    return this.http.post(this.apiServerUrl, data);
  }

  //Delete restAPI endpoint
  deleteStudent(id: number) {
    return this.http.delete(`${this.apiServerUrl}/${id}`);
  }

  //Get by restAPI endpoint
  getStudentById(id: number) {
    return this.http.get(`${this.apiServerUrl}/${id}`);
  }

  //Update restAPI endpoint
  updateStudentData(id: number, data: any) {
    return this.http.put(`${this.apiServerUrl}/${id}`, data);
  }
}
