import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-easter-menu',
  templateUrl: './easter-menu.component.html',
  styleUrls: ['./easter-menu.component.scss'],
})
export class EasterMenuComponent implements OnInit {
  easterProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.easterProducts = this.productsService.getEasterProducts();
  }
}
