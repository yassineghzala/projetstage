import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/classes/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styleUrls: ['./clients-listing.component.css']
})
export class ClientsListingComponent implements OnInit{

  clientsList:Client[] = [];
  constructor(private clientService:ClientService,private router:Router){}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clientsList = data;
      console.log(this.clientsList);
    })
  }

  navigateTo(path:string){
    this.router.navigate(["/home/"+path])
  }
}
