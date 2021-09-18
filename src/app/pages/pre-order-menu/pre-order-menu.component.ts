import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-pre-order-menu',
  templateUrl: './pre-order-menu.component.html',
  styleUrls: ['./pre-order-menu.component.scss'],
})
export class PreOrderMenuComponent implements OnInit {
  preOrderProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.preOrderProducts = this.productsService.getPreOrderProducts();
  }
}
