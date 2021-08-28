import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-take-out-menu',
  templateUrl: './take-out-menu.component.html',
  styleUrls: ['./take-out-menu.component.scss'],
})
export class TakeOutMenuComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getTakeOutProducts();
  }
}
