import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastheadComponent } from "./components/masthead/masthead.component";
import { ServicesComponent } from "./components/services/services.component";

const routes: Routes = [
  { path: 'home', component: MastheadComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
