import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CakeService } from "../../services/cakes.services";

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css']
})
export class ProductsInfoComponent implements OnInit {

  cake:any = {}

  constructor( private _aRoute: ActivatedRoute, private _cakeService: CakeService ) {

    this._aRoute.params.subscribe( params => {
      this.cake = this._cakeService.getCake( params['id'] )
    })

  }

  ngOnInit(): void {
  }

}
