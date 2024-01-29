import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsURL:string = "http://localhost:8088/api/v1/clients";
  constructor(private httpClient:HttpClient) { }

  getAllClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.clientsURL);
  }

  getClientById(clientID:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.clientsURL}/${clientID}`);
  }

  createClient(client:Client){
    return this.httpClient.post<Client>(`${this.clientsURL}`,client);
  }

  updateClient(clientID:number,client:Client):Observable<Client>{
    return this.httpClient.put<Client>(`${this.clientsURL}/${clientID}`,client);
  }

  deleteClientById(clientID:number):Observable<Client>{
    return this.httpClient.delete<Client>(`${this.clientsURL}/${clientID}`);
  }
}
