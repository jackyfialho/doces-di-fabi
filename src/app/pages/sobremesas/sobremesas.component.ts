import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.component.html',
  styleUrls: ['./sobremesas.component.scss'],
})
export class SobremesasComponent implements OnInit {
  desertProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.desertProducts = this.productsService.getDesertsProducts();
  }
}
