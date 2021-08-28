import { Injectable } from '@angular/core';

import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private takeOutProducts: Product[] = [
    new Product(
      'Bolo de Pote',
      'R$ 8,00',
      'Bolo de massa amanteigada e camadas generosas de dois recheios diferentes.',
      'https://i.postimg.cc/zBLsTDtB/bolo-de-pote.jpg',
    ),
    new Product(
      'Brownie Chocolatudo',
      'R$ 10,00',
      'Brownie com casquinha crocante e cremoso por dentro recheado com gotas de chocolate.',
      'https://i.postimg.cc/sX9p6700/brownie.jpg',
    ),
    new Product(
      'Trufa de Chocolate',
      'R$ 2,50 un.',
      'Trufas cremosas feitas com chocolate puro.',
      'https://i.postimg.cc/rwrRZ5DC/trufa-de-chocolate.jpg',
    ),
  ];

  getTakeOutProducts() {
    return this.takeOutProducts.slice();
  }
}
