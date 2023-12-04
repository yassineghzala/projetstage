;
import { WelcomeComponent } from './compos/welcome/welcome.component';
import { AboutComponent } from './compos/about/about.component';
import { MenuComponent } from './compos/menu/menu.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListfilmsComponent } from './compos/listfilms/listfilms.component';
import { FewfilmsComponent } from './compos/fewfilms/fewfilms.component';
import { UpdatefilmComponent } from './compos/updatefilm/updatefilm.component';
import { ErrorComponent } from './compos/error/error.component';
import { DashfilmsComponent } from './compos/dashfilms/dashfilms.component';

@NgModule({
  declarations: [
    AppComponent,
    ListfilmsComponent,
    FewfilmsComponent,
    UpdatefilmComponent,
    MenuComponent, AboutComponent, WelcomeComponent, ErrorComponent, DashfilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
