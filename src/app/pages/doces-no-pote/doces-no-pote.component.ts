import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-doces-no-pote',
  templateUrl: './doces-no-pote.component.html',
  styleUrls: ['./doces-no-pote.component.scss'],
})
export class DocesNoPoteComponent implements OnInit {
  docesNoPoteProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.docesNoPoteProducts = this.productsService.getDocesNoPoteProducts();
  }
}
