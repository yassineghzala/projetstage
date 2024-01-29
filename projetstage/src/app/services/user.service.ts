import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserURL:string = "http://localhost:8088/api/v1/users";
  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.UserURL);
  }

  getUserById(userID:number):Observable<User>{
    return this.httpClient.get<User>(`${this.UserURL}/${userID}`);
  }

  createUser(user:User){
    return this.httpClient.post<User>(`${this.UserURL}`,user);
  }

  updateUser(user:User,userID:number):Observable<User>{
    return this.httpClient.put<User>(`${this.UserURL}/${userID}`,user);
  }
  deleteUserById(userID:number){
    return this.httpClient.delete<User>(`${this.UserURL}/${userID}`)
  }
}
