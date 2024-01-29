import { Component, Input, Inject } from '@angular/core';
import { User } from 'src/app/classes/user';
import {
  MatDialog,
} from '@angular/material/dialog';

import { ModifyUserComponent } from '../modify-user/modify-user.component';




@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
  
})
export class SingleUserComponent {
@Input() user!:User

constructor(public dialog: MatDialog) {}




}
