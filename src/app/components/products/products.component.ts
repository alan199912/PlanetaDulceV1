import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Cake, CakeService } from "../../services/cakes.services";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cakes: Cake[] = []

  constructor( private _cakeService: CakeService, private _router: Router ) {

  }

  ngOnInit(): void {

    this.cakes = this._cakeService.getCakes();

    console.log(this.cakes)

  }

  verCake( idx:number ) {
    this._router.navigate(['/producto', idx])
  }

}
