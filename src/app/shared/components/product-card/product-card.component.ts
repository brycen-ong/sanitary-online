import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('productCard') productCard: Products;

  constructor() { }

  ngOnInit(): void {
  }

}
