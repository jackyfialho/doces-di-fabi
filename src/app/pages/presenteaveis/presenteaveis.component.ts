import { Component, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-presenteaveis',
  templateUrl: './presenteaveis.component.html',
  styleUrls: ['./presenteaveis.component.scss'],
})
export class PresenteaveisComponent implements OnInit {
  givaAwayProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.givaAwayProducts = this.productsService.getGiveAwayProducts();
  }
}
