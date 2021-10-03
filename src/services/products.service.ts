import { Injectable } from '@angular/core';

import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private takeOutProducts: Product[] = [
    new Product(
      'Bolo de pote',
      'R$ 13,00',
      'Bolo de massa amanteigada e camadas generosas de dois recheios diferentes.',
      '220ml',
      [
        'Abacaxi e Ninho',
        'Brigadeiro de Nutella e Ninho',
        'Frutas vermelhas e ninho',
      ],
      'https://i.postimg.cc/rmzt2tXP/bolo-de-pote.jpg',
    ),
    new Product(
      'Copo Supreme da Fabi',
      'R$ 17,00',
      '',
      '260ml',
      ['Biss'],
      'https://i.postimg.cc/4dMHfNXN/copo-supreme.jpg',
    ),
    new Product(
      'Super Fatia Oreo',
      'R$ 19,00',
      '',
      '',
      [],
      'https://i.postimg.cc/mZjqjcZD/bolo-oreo.png',
    ),
    new Product(
      'Trufa de chocolate (unid.)',
      'R$ 15,00',
      '',
      '',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
  ];

  private preOrderProducts: Product[] = [
    new Product(
      'Torta na taça',
      'R$ 220,00',
      '',
      '2,4l',
      ['Danet e ninho'],
      'https://i.postimg.cc/rsTcjJbG/torta-na-taca.jpg',
    ),
    new Product(
      'Torta na taça',
      'R$ 230,00',
      '',
      '2,4l',
      ['Brigadeiro de Nutella e ninho', 'Abacaxi e ninho'],
      'https://i.postimg.cc/Kvv4yGqP/torta-na-taca-abacaxi.jpg',
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
      'https://i.postimg.cc/CxhFXjSh/torta-na-taca-nozes.jpg',
    ),
    new Product(
      'Trufa de chocolate',
      '(cento) R$ 280,00',
      'Trufas cremosas feitas com chocolate puro.',
      '35g',
      [''],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    new Product(
      'Kit presente da Fabi master',
      'R$ 179,00',
      '',
      '',
      [
        'Contém:',
        '- 4 pães de mel',
        '- 2 bolos de pote',
        '- 1 caixa com 6 trufas',
        '- 1 tortinha compartilhada',
        '- 2 mix de amendoim',
        '- 2 Keep cooler',
      ],
      'https://i.postimg.cc/VkB8sT7j/kit-master.jpg',
    ),
    new Product(
      'Kit Fabi Premium',
      'R$ 159,00',
      'Trufas cremosas feitas com chocolate puro.',
      '',
      [
        'Contém:',
        '- 2 pães de mel',
        '- 2 bolos de pote',
        '- 1 barra de chocolate recheada',
        '- 1 caixa com 6 trufas',
        '- 2 brownies',
        '- 2 Keep cooler',
        '- 2 mix de amendoim',
      ],
      'https://i.postimg.cc/L58dxBLG/kit-fabi.jpg',
    ),
  ];

  private dolceWeekProducts: Product[] = [
    new Product(
      'Bolo de pote',
      'R$ 13,00',
      'Bolo de massa amanteigada e camadas generosas de dois recheios diferentes.',
      '220ml',
      ['Romeu e Julieta', 'Red Velvet com cream cheese'],
      'https://i.postimg.cc/WbBjFS81/red-velvet.jpg',
    ),
    new Product(
      'Copo Extra Supreme',
      'R$ 17,00',
      '',
      '260ml',
      ['Kit Kat'],
      'https://i.postimg.cc/gkXm21v7/copo-semana-dolce.jpg',
    ),
    new Product('Bombom de uva no pote', 'R$ 15,00', '', '', [], ''),
    new Product(
      'Caixa com 4 trufas de Brownie',
      'R$ 14,00',
      'Trufas de brownie, cremosas por dentro e com casquinha crocante por fora.',
      '',
      [],
      'https://i.postimg.cc/hjbKJ2XZ/trufa-de-brownie.jpg',
    ),
    new Product(
      'Tortinha compartilhada',
      'R$ 22,00',
      '',
      '',
      ['Abacaxi e coco', 'Abacaxi e ninho'],
      'https://i.postimg.cc/XJwK0nL0/tortinha-abacaxi-ninho.jpg',
    ),
  ];

  getTakeOutProducts() {
    return this.takeOutProducts.slice();
  }

  getPreOrderProducts() {
    return this.preOrderProducts.slice();
  }

  getdolceWeekProducts() {
    return this.dolceWeekProducts.slice();
  }
}
