import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContatcComponent } from './components/contatc/contatc.component';
import { FooterComponent } from './components/footer/footer.component';

// services
import { CakeService } from "./services/cakes.services";
import { ProductsInfoComponent } from './components/products-info/products-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MastheadComponent,
    ServicesComponent,
    ProductsComponent,
    AboutComponent,
    ContatcComponent,
    FooterComponent,
    ProductsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
