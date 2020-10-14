import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastheadComponent } from "./components/masthead/masthead.component";
import { ServicesComponent } from "./components/services/services.component";
import { ProductsComponent } from "./components/products/products.component";
import { AboutComponent } from "./components/about/about.component";
import { ContatcComponent } from "./components/contatc/contatc.component";
import { ProductsInfoComponent } from "./components/products-info/products-info.component";

const routes: Routes = [
  { path: 'home', component: MastheadComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'producto/:id', component: ProductsInfoComponent },
  { path: 'sobre-nosotros', component: AboutComponent  },
  { path: 'contacto', component: ContatcComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
