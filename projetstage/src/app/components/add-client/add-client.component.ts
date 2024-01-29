import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit{

  constructor(private router:Router,private fb:FormBuilder,private clientService:ClientService){}
  addClientForm!:FormGroup


  ngOnInit(): void {
    this.addClientForm = this.fb.group({
      code: [1, Validators.required],
      social_reason: ['social reason',Validators.required],
      activity: ['activity',Validators.required],
      category: ['category',Validators.required],
      token: [1,Validators.required],
      status:['status',Validators.required],
      nature: ['nature',Validators.required],
      final_category: [1,Validators.required],
      eligible_rse: [1,Validators.required],
      adress: ['adress',Validators.required],
      client_engagement: ['client engagement',Validators.required],
      domestic_activity_id: [2,Validators.required],
      telephone: [12345678,Validators.required],
      legal_form: ['legal form',Validators.required]
    })
  }

  addClient(){
    this.addClientForm.value.created_at = new Date
    this.clientService.createClient(this.addClientForm.value).subscribe(data => {
      console.log(data);
    })
  }

  

  navigateTo(path:string){
    this.router.navigate(["/home/"+path]);
  }
}
