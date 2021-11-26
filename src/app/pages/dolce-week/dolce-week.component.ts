import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-dolce-week',
  templateUrl: './dolce-week.component.html',
  styleUrls: ['./dolce-week.component.scss'],
})
export class DolceWeekComponent implements OnInit {
  dolceWeekProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.dolceWeekProducts = this.productsService.getDolceWeekProducts();
  }
}
