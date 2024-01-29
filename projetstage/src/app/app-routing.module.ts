import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListingComponent } from './components/users-listing/users-listing.component';
import { ClientsListingComponent } from './components/clients-listing/clients-listing.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddClientComponent } from './components/add-client/add-client.component';

const routes: Routes = [
  {path:"",component:AuthentificationComponent},
  {path:"home",component:HomeComponent,children:[
    {path:"userListing",component:UsersListingComponent},
    {path:"clientListing",component:ClientsListingComponent},
    {path:"addUser",component:AddUserComponent},
    {path:"addClient",component:AddClientComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
