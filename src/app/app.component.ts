import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService],
})
export class AppComponent implements OnInit {
  title = 'doces-di-fabi';
  loadedFeature = 'menu';

  takeOutProducts: Product[] = [];
  preOrderProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.takeOutProducts = this.productsService.getTakeOutProducts();
    this.preOrderProducts = this.productsService.getPreOrderProducts();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
