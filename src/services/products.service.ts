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
      '',
      '220ml',
      [
        {
          name: 'Abacaxi e Ninho',
          description:
            'Massa especial com creme branco e generosos pedaços de abacaxi acompanhada de uma mousse aerada de leite ninho. O verdadeiro sabor da infância.',
        },
        {
          name: 'Nutelíssimo',
          description:
            'Brigadeiro original de Nutella acompanhado de uma deliciosa massa de bolo e mousse areada de leite ninho. Só a Fabi faz pra você assim!',
        },
        {
          name: 'Explosão Vermelha',
          description:
            'Geleia de frutas vermelhas com pedaços da fruta e a cremosidade especial de uma geleia perfeita, acompanhada de nossa deliciosa mousse aerada de ninho.',
        },
        {
          name: 'Danet da Fabi',
          description:
            'Delicioso creme de Danet, que nos remete a momentos únicos, acompanhado da nossa massa especial mousse de leite ninho. Simplesmente o puro sabor do chocolate.',
        },
      ],
      'https://i.postimg.cc/rmzt2tXP/bolo-de-pote.jpg',
    ),
    new Product(
      'Copo Supreme da Fabi',
      'R$ 17,00',
      '',
      '260ml',
      [
        {
          name: 'Duo de Brigadeiro',
          description:
            'Feito com chocolate branco cremoso e nosso delicioso brigadeiro, sendo finalizado com mousse de ninho e pedaços de chocolate.',
        },
        {
          name: 'Surpresa de Uva',
          description:
            'Uvas selecionadas acompanhadas de mousse de leite ninho, nosso delicioso creme de Danet e pedaços de chocolate.',
        },
      ],
      'https://i.postimg.cc/4dMHfNXN/copo-supreme.jpg',
    ),
    new Product(
      'Caixa de Trufas',
      'R$ 19,90',
      'Nossas trufas são irresistíveis: característico sabor de chocolate que derrete na primeira mordida. É sabor que não acaba mais! Temos opções a partir de 4 unidades.',
      '',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    new Product(
      'Pão de Mel',
      '(unid.) R$ 7,90',
      '',
      '80g',
      [
        {
          name: 'Doce de Leite',
          description:
            'Recheado com um cremoso doce de leite e banhado no chocolate. Você vai se surpreender com esse sabor.',
        },
        {
          name: 'Nuteludo da Fabi',
          description:
            'Generosamente recheado de Nutella e banhado e nosso delicioso chocolate. Não dá pra comer um só!',
        },
      ],
      'https://i.postimg.cc/J0gpwB6r/pao-de-mel.jpg',
    ),
    new Product(
      'Super Fatia da Fabi',
      'R$ 19,00',
      'Uma generosa fatia gelada de chocolate, com mousse de leite ninho, pedaços do nosso Oreo de brigadeiro cremoso. Uma verdadeira explosão de fatia.',
      '',
      [],
      'https://i.postimg.cc/J056TxDP/fatia-supreme-oreo.jpg',
    ),
  ];

  private preOrderProducts: Product[] = [
    new Product(
      'Torta na taça',
      '',
      '',
      '2,4l',
      [
        {
          name: 'Danet da Fabi',
          description:
            'Uma sobremesa para toda a família! Feita com uma deliciosa massa de bolo, nosso Danet especial e mousse aerada de leite ninho. Além de brigadeiros para decorar!',
          price: 'R$ 220,00',
        },
        {
          name: 'Brigadeiríssima de Nutella',
          description:
            'Torta feita com o verdadeiro brigadeiro de Nutella que só a Fabi faz pra sua família! Vocês merecem experimentar e se deliciar! Nossa mousse aerada faz toda a diferença nessa torta!',
          price: 'R$ 230,00',
        },
        {
          name: 'Red Velvet com Cream Cheese',
          description:
            'Massa aveludada com sabor super especial, acompanhada de um delicioso recheio premium de Cream Cheese e mousse de leite ninho! Se surpreeenda com essa combinação!',
          price: 'R$ 250,00',
        },
      ],
      'https://i.postimg.cc/rsTcjJbG/torta-na-taca.jpg',
    ),
    new Product(
      'Trufas de chocolate',
      '(cento) R$ 280,00',
      'Nossas trufas podem abrilhantar seu evento! Saborosas e derretem na boca com o gosto inigualável do mais puro chocolate.',
      '35g',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    new Product(
      'Kit presente da Fabi',
      '',
      'Surpreenda quem você ama com nossos kits! Todas as nossas delicias em uma cesta presente!',
      '',
      [
        {
          name: 'Kit Master',
          description:
            'Contém: 4 pães de mel, 2 bolos de pote, 1 caixa com 6 trufas de chocolate, 1 copo supreme, 2 mix de amendoim, 2 keep cooler e 1 caserinho de cenoura e chocolate.',
          price: 'R$ 179,00',
        },
        {
          name: 'Kit Premium',
          description:
            'Contém: 2 pães de mel, 2 bolos de pote, 1 barra de chocolate, 1 caixa com 4 trufas de chocolate, 2 mix de amendoim, 2 keep cooler e 1 caserinho de chocolate.',
          price: 'R$ 159,00',
        },
      ],
      'https://i.postimg.cc/L58dxBLG/kit-fabi.jpg',
    ),
  ];

  private dolceWeekProducts: Product[] = [];

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
