import { Component, Input } from '@angular/core';
import { Client } from 'src/app/classes/client';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css']
})
export class SingleClientComponent {

  @Input() client!:Client
}
