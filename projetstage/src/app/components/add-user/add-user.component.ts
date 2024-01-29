import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Isadmin } from 'src/app/classes/isadmin';
import { Status } from 'src/app/classes/status';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  addUserForm!:FormGroup;
  usersList:User[] = [];
  allStatus = Object.values(Status);
  adminBool = Object.values(Isadmin);

  constructor(private fb:FormBuilder,private router:Router,private userService:UserService){}


  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(data => {
      this.usersList = data;
      console.log(this.usersList);
    })


    this.addUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required,Validators.email], 
      token: ['', Validators.required],
      status: [this.allStatus[0], Validators.required],
      isadmin: [true, Validators.required],
      created_at: ['']
    });
  }

  public get getUsername(){
    return this.addUserForm.get("username");
  }

  public get getEmail(){
    return this.addUserForm.get("email");
  }

  public get getToken(){
    return this.addUserForm.get("token");
  }

  public get getCreateDate(){
    return this.addUserForm.get("created_at");
  }
  usernameRequired(){
    return this.getUsername?.errors?.["required"] && this.getUsername?.touched; 
  }

  emailRequired(){
    return this.getEmail?.errors?.["required"] && this.getEmail?.touched;
  }

  tokenRequired(){
    return this.getToken?.errors?.["required"] && this.getToken?.touched;
  }

  addUser(){
    this.addUserForm.value.created_at = new Date;
    this.addUserForm.value.created_at.toLocaleString();
    this.userService.createUser(this.addUserForm.value).subscribe(data => {
      console.log(data);
      
    })
  }

  navigateTo(path:string){
    this.router.navigate(["/home/"+path]);
  }
}
