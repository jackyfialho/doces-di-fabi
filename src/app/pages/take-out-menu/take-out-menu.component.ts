import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';
@Component({
  selector: 'app-take-out-menu',
  templateUrl: './take-out-menu.component.html',
  styleUrls: ['./take-out-menu.component.scss'],
})
export class TakeOutMenuComponent implements OnInit {
  takeOutProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.takeOutProducts = this.productsService.getTakeOutProducts();
  }
}
