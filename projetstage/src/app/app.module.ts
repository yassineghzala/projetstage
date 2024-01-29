import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListingComponent } from './components/users-listing/users-listing.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { ClientsListingComponent } from './components/clients-listing/clients-listing.component';
import { SingleClientComponent } from './components/single-client/single-client.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './components/add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HomeComponent,
    HeaderComponent,
    UsersListingComponent,
    SingleUserComponent,
    ClientsListingComponent,
    SingleClientComponent,
    AddUserComponent,
    AddClientComponent,
    ModifyUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
