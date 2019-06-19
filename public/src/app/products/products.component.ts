import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  details = false;
  brand = false;
  category = false;

  constructor() { }

  ngOnInit() {
  }
  
  detail(){
    this.details = true;
  }


}
