import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/classes/status';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { ModifyUserComponent } from '../modify-user/modify-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.css']
})
export class UsersListingComponent implements OnInit{


  searchUserForm!:FormGroup
  allStatus = Object.values(Status);
  usersList:User[] = [];
  searchList:User[] = [];
  searchedUsers:User[] = [];
  userExists:boolean=false;
  constructor(private userService:UserService,private router:Router,private fb:FormBuilder,public dialog: MatDialog){}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.usersList = data;
      this.searchList = data;
    })

    this.searchUserForm = this.fb.group({
      email: [''],
      status: [this.allStatus[0]]
    })
  }
  navigateTo(path:string){
    this.router.navigate([path]);
  }

  searchUser(){
    this.userService.getAllUsers().subscribe( () => {
      this.searchedUsers = this.searchList.filter((user) => this.searchUserForm.value.email == user.email  && this.searchUserForm.value.status == user.status);
      console.log(this.searchedUsers);
      this.usersList = this.searchedUsers;
    })
  }
  deleteUserById(userID:number){
    this.userService.deleteUserById(userID).subscribe(data => {
      console.log(data);
      this.usersList = this.usersList.filter((user) => user.userID !== userID);
      this.searchList = this.searchList.filter((user) => user.userID !== userID);
    })
    
  }
  reinitialise(){
    this.userService.getAllUsers().subscribe(data => {
      this.usersList = data;
      console.log(this.usersList);
      this.searchedUsers = [];
    })
  } 
openDialog() {
  this.dialog.open(ModifyUserComponent);
  }
}
