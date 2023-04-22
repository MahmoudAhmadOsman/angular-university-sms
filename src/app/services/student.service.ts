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
  public baseUrl = 'https://stapes-api.onrender.com/students';

  constructor(private http: HttpClient, private courseHttp: HttpClient) {}

  //Get all
  getAllStudent() {
    return this.http.get(this.baseUrl);
  }

  //Save 
  saveStudentData(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  //Delete 
  deleteStudent(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //Get by id
  getStudentById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //Update 
  updateStudentData(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
