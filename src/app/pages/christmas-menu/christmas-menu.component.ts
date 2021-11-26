import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-christmas-menu',
  templateUrl: './christmas-menu.component.html',
  styleUrls: ['./christmas-menu.component.scss']
})
export class ChristmasMenuComponent implements OnInit {
  christmasProducts: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.christmasProducts = this.productsService.getChristmasProducts();
  }

}
