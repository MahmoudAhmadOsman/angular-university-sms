import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  //Get student list
  getAllStudent() {
    return this.http.get(this.url);
  }
}
