import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  constructor(private router:Router){}

  navigateTo(path:string){
    this.router.navigate([path]);
  }
}
