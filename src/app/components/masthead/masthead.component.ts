import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  serv() {
    this._router.navigate(['servicios'])
  }

}
