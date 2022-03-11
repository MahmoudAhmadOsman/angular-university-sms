import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  // public RegisterUrl = 'http://localhost:3000/users';
  public RegisterUrl = 'https://custom-states-api.herokuapp.com/users';
  constructor(private http: HttpClient) {}

  //Register new user
  saveNewUserData(data: any) {
    return this.http.post(this.RegisterUrl, data);
  }
}
