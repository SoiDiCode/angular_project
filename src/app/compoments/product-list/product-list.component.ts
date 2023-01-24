import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products : Product[]=[
  new Product('SP1','Hat'),
  new Product('SP2','Jean'),
 ]
  constructor() { }

  ngOnInit() {
  }

}
