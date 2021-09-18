import { Injectable } from '@angular/core';

import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private takeOutProducts: Product[] = [
    new Product(
      'Bolo de Pote',
      'R$ 13,00',
      'Bolo de massa amanteigada e camadas generosas de dois recheios diferentes.',
      '220ml',
      [
        'Danet e Ninho',
        'Abacaxi e Ninho',
        'Brigadeiro de Nutella e Ninho',
        'Frutas Vermelhas e Ninho',
        'Doce de Leite e Coco',
      ],
      'https://i.postimg.cc/rmzt2tXP/bolo-de-pote.jpg',
    ),
    new Product(
      'Copo Supreme da Fabi',
      'R$ 17,00',
      '',
      '260ml',
      ['Napolitano', 'Oreo', 'Browninho', 'Biss'],
      'https://i.postimg.cc/4dMHfNXN/copo-supreme.jpg',
    ),
    new Product(
      'Brownie Individual',
      'R$ 10,00',
      'Brownie com casquinha crocante, cremoso por dentro e recheado com gotas de chocolate.',
      '110g',
      ['Brigadeiro', 'Doce de leite', 'Brigadeiro de Nutella', 'Maracujá'],
      'https://i.postimg.cc/HnycVDL0/brownie.jpg',
    ),
  ];

  private preOrderProducts: Product[] = [
    new Product(
      'Torta na taça',
      'R$ 220,00',
      '',
      '2,4l',
      ['Danet e ninho'],
      '',
    ),
    new Product(
      'Torta na taça',
      'R$ 230,00',
      '',
      '2,4l',
      ['Brigadeiro de Nutella e ninho', 'Abacaxi e ninho'],
      '',
    ),
    new Product(
      'Torta na taça',
      'R$ 250,00',
      '',
      '2,4l',
      ['Red velvet com cream cheese e ninho'],
      '',
    ),
    new Product(
      'Torta na taça',
      'R$ 260,00',
      '',
      '2,4l',
      ['Nozes e doce de leite'],
      '',
    ),
    new Product(
      'Trufa de chocolate',
      '(cento) R$ 280,00',
      'Trufas cremosas feitas com chocolate puro.',
      '35g',
      [''],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
  ];

  getTakeOutProducts() {
    return this.takeOutProducts.slice();
  }

  getPreOrderProducts() {
    return this.preOrderProducts.slice();
  }
}
