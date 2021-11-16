import { Component, OnInit, Input } from '@angular/core';
import { ProductBase } from '../../interfaces/product.interface';


@Component({
  selector: 'app-product-card-base',
  templateUrl: './product-card-base.component.html',
  styleUrls: ['./product-card-base.component.scss']
})
export class ProductCardBaseComponent implements OnInit {

  @Input('productBase') productBase: ProductBase;

  constructor() { }

  ngOnInit(): void {
  }

}
