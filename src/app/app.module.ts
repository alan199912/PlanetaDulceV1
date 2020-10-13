import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ServicesComponent } from './components/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
