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
      'Danet e Ninho, Abacaxi e Ninho, Brigadeiro de Nutella e Ninho, Frutas Vermelhas e Ninho, Doce de Leite e Coco',
      'https://i.postimg.cc/rmzt2tXP/bolo-de-pote.jpg',
    ),
    new Product(
      'Copo Supreme da Fabi',
      'R$ 18,00',
      '',
      '260ml',
      'KitKat, Oreo, Três Mousses, Sonho de Valsa, Napolitano, Prestígio',
      'https://i.postimg.cc/4dMHfNXN/copo-supreme.jpg',
    ),
    new Product(
      'Fatia de Brownie',
      '(unid) R$ 16,00',
      'Brownie com casquinha crocante, cremoso por dentro e recheado com gotas de chocolate.',
      '110g',
      'Nutella e Chocolatudo',
      'https://i.postimg.cc/HnycVDL0/brownie.jpg',
    ),
    new Product(
      'Fatia de Brownie',
      '(unid) R$ 18,00',
      'Brownie com casquinha crocante, cremoso por dentro e recheado com gotas de chocolate.',
      '110g',
      'Duo de brigadeiro',
      'https://i.postimg.cc/HnycVDL0/brownie.jpg',
    ),
    new Product(
      'Pão de Mel',
      'R$ 7,00',
      'Pão de mel recheado com cobertura de chocolate.',
      '30g',
      'Doce de leite e Nutella',
      'https://i.postimg.cc/J0gpwB6r/pao-de-mel.jpg',
    ),
    new Product(
      'Tortinha compartilhada de morango',
      'R$ 29,00',
      'Torta cremosa com chocolate, mousse de ninho e morangos.',
      '320g',
      '',
      'https://i.postimg.cc/vT1vvZQp/torta-compartilhada.jpg',
    ),
    new Product('Bombom no pote de uva', 'R$ 19,00', '', '', '', ''),
  ];

  private preOrderProducts: Product[] = [
    new Product('Torta na taça', 'R$ 220,00', '', '2,4l', 'Danet e ninho', ''),
    new Product(
      'Torta na taça',
      'R$ 230,00',
      '',
      '2,4l',
      'Brigadeiro de Nutella e ninho, Abacaxi e ninho',
      '',
    ),
    new Product(
      'Torta na taça',
      'R$ 250,00',
      '',
      '2,4l',
      'Red velvet com cream cheese e ninho',
      '',
    ),
    new Product(
      'Torta na taça',
      'R$ 260,00',
      '',
      '2,4l',
      'Nozes e doce de leite',
      '',
    ),
    new Product(
      'Trufa de chocolate',
      '(cento) R$ 280,00',
      'Trufas cremosas feitas com chocolate puro.',
      '35g',
      '',
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
