import { Injectable } from '@angular/core';

import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private takeOutProducts: Product[] = [
    new Product(
      'Bolos de pote',
      'R$ 14,00',
      '',
      '220ml',
      [
        {
          name: 'Nutelíssimo',
          description:
            'Brigadeiro de verdadeira Nutella e mousse areada de leite Ninho, só a Fabi faz pra você!',
        },
        {
          name: 'Abacaxi e Ninho',
          description:
            'Creme branco, massa aveludada de bolo com pedaços generosos de abacaxi e mousse areada de leite Ninho. O verdadeiro sabor da infância!',
        },
        {
          name: 'Blend de amor',
          description:
            'Nosso blend está recheado de amor, com a dupla de brigadeiros mais queridos do cardápio, acompanhado de um delicioso bolo de chocolate. Porque você merece essa experiência!',
        },
      ],
      'https://i.postimg.cc/rmzt2tXP/bolo-de-pote.jpg',
    ),
    new Product(
      'Torta no pote',
      'R$ 16,00',
      '',
      '220ml',
      [
        {
          name: 'Maracujá',
          description:
            'Torta acompanhada de uma deliciosa farofa de biscoito, mousse de maracujá e finalizada com ganasche de chocolate meio amargo. Essa torta tem excelência no sabor!',
        },
        {
          name: 'Banana caramelizada',
          description:
            'A melhor torta de banana caramelizada da sua vida com um creme 4 leites! Você vai se surpreender!',
        },
        {
          name: 'Romeu e Julieta',
          description:
            'A queridinha de todos feita com cream cheese e geleia de goiaba! Acompanhada de uma farofa crocante de biscoito!',
        },
      ],
      'https://i.postimg.cc/65rMH5TZ/torta-banana-pote.jpg',
    ),
    new Product(
      'Copo Supreme da Fabi',
      'R$ 19,90',
      '',
      '270ml',
      [
        {
          name: 'Delícia Tropical',
          description:
            'Salada de frutas da época muito bem selecionadas, acompanhada de um creme de yougurte saborizado com frutas vermelhas. E vem com uma granola artesanal que só a Fabi faz pra vocês!',
        },
        {
          name: 'Três Mousses',
          description:
            'Um copo recheado de sabores. Mousse de chocolate, morango e Ninho com pedaços de chocolate e brownie. Uma explosão de sabores!',
        },
        {
          name: 'Kit Kat',
          description:
            'Nhá Benta com Kit Kat e mousse de chocolate, finalizada com o melhor brownie da sua vida! Porque você merece !',
        },
      ],
      'https://i.postimg.cc/GmNh945y/copo-supreme-fabi.jpg',
    ),
    new Product(
      'Crocantinha da Fabi',
      'R$ 12,00',
      'A melhor palha italiana da sua vida! Feita com brigadeiro cremoso, nossa queridinha Nutella e biscoito crocante! Cremosidade sem limite!',
      '',
      [],
      'https://i.postimg.cc/HnF1dhz8/crocantinha-v2.png',
    ),
    /* new Product(
      'Caixa de Trufas',
      'a partir de R$ 22,90',
      'Nossas trufas são irresistíveis: característico sabor de chocolate que derrete na primeira mordida. É sabor que não acaba mais!',
      '',
      [
        {
          name: '4 unidades',
          price: 'R$ 22,90',
        },
        {
          name: '6 unidades',
          price: 'R$ 32,90',
        },
        {
          name: 'Individuais',
          price: 'R$ 7,00 (cada)*',
          description: '*apenas para pedidos acima de 5 unidades',
        },
      ],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ), */
    // new Product(
    //   'Super Fatia da Fabi',
    //   'R$ 19,00',
    //   'Uma generosa fatia gelada de chocolate, com mousse de leite ninho, pedaços do nosso Oreo de brigadeiro cremoso. Uma verdadeira explosão de fatia.',
    //   '',
    //   [],
    //   'https://i.postimg.cc/J056TxDP/fatia-supreme-oreo.jpg',
    // ),
    /* new Product(
      'Bolo Piscina da Fabi!',
      'R$ 79,00',
      'Versão cenoura e chocolate! Coberto com uma deliciosa Ganasche de chocolate meio amargo! As duas versões são de dar água na boca! Peça o seu com 2 (dois) dias de antecedência!',
      '800g',
      [],
      'https://i.postimg.cc/MHj2kVMt/bolo-piscina-fabi.jpg',
    ), */
    // new Product(
    //   'Caserinho de cenoura  e chocolate!',
    //   'R$ 25,90',
    //   'Sabor que só a Fabi faz!',
    //   '350g',
    //   [],
    //   'https://i.postimg.cc/Px7sF2xP/caseirinho-chocolate.jpg',
    // ),
    /* new Product(
      'Tortinha compartilhada',
      'R$ 25,00',
      '',
      '',
      [
        {
          name: 'Red Velvet',
          description:
            'Massa aveludada, delicioso recheio de creme chesse com nossa mousse aerada de ninho.',
        },
        {
          name: 'Abacaxi e cocada cremosa',
          description:
            'Você merece experimentar essa cocada da Fabi! Uma delícia que derrete na boca e uma farofinha de biscoito crocante!',
        },
      ],
      'https://i.postimg.cc/Bbv1X7YD/torta-compartilhada-red-velvet.jpg',
    ),
    new Product(
      'Pão de Mel*',
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
        {
          name: '',
          description:
            '*Todos os sabores: pedido mínimo a partir de 10 unidades.',
        },
      ],
      'https://i.postimg.cc/J0gpwB6r/pao-de-mel.jpg',
    ),
    new Product(
      'Brownie recheado de brigadeiro',
      '(porção individual) R$ 12,00',
      'O melhor brownie só a Fabi tem! E ele vem recheado de brigadeiro gourmet!',
      '',
      [],
      'https://i.postimg.cc/J7bzBsGt/brownie-brigadeiro.jpg',
    ), */
  ];

  private preOrderProducts: Product[] = [
    new Product(
      'Torta na travessa',
      '',
      '',
      '',
      [
        {
          name: 'Nutelíssimo',
          description:
            'Brigadeiro da verdadeira Nutella e mousse areada de leite Ninho, só a Fabi faz pra você!',
          price: '',
          extraInfos: true,
          extraInfosArray: ['Tamanho G - R$ 170,00', 'Tamanho P - R$ 90,00'],
        },
        {
          name: 'Abacaxi com ninho',
          description:
            'Creme branco, massa aveludada de bolo com pedaços generosos de abacaxi e mousse aerada de leite Ninho. O verdadeiro sabor da infância!',
          price: '',
          extraInfos: true,
          extraInfosArray: ['Tamanho G - R$ 150,00', 'Tamanho P - R$ 80,00'],
        },
      ],
      'https://i.postimg.cc/CKDW6qyq/nova-taca.jpgg',
    ),
    new Product(
      'Bombons',
      '',
      '',
      '',
      [
        {
          name: 'Bombom de Uva',
          description:
            'Creme refrescante 4 leites, uvas selecionadas e finalizado com uma ganasche de chocolate meio amargo.',
          price: '',
          extraInfos: true,
          extraInfosArray: ['Tamanho G - R$ 120,00', 'Tamanho P - R$ 70,00'],
        },
        {
          name: 'Dois Amores',
          description:
            'Torta mousse de chocolate com nossa deliciosa mousse de leite Ninho! Essa combinação não tem erro!',
          price: '',
          extraInfos: true,
          extraInfosArray: ['Tamanho G - R$ 140,00', 'Tamanho P - R$ 80,00'],
        },
      ],
      'https://i.postimg.cc/rwTWr6V2/supresa-uva.jpg',
    ),
    new Product(
      'Brownie Onstentação',
      '',
      'Nosso maravilhoso brownie em cubos, com mousse de doce de leite cremoso e ganasche de chocolate meio amargo.',
      '',
      [],
      'https://i.postimg.cc/fTw9zDfc/brownie-onstentacao-2.jpg',
      true,
      ['Tamanho G - R$ 150,00', 'Tamanho P - R$ 80,00'],
    ),
    new Product(
      'Chocolatudo da Fabi',
      'R$ 54,90',
      'Uma massa de chocolate como vc nunca viu! Aerada é super fofa! Coberta com ganasche de chocolate! Quem não ama um lanche da tarde né!',
      '',
      [],
      'https://i.postimg.cc/DZCrD35h/chocolatudo-fabi.png',
    ),
    new Product(
      'Trufas da Fabi',
      '(cento) R$ 350,00',
      'São irresistíveis, com característico sabor de chocolate que derrete na primeira mordida!',
      '',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
      true,
      [
        'Caixa com 4 unidades - R$ 22,90',
        'Caixa com 6 unidades - R$ 34,90',
        'Individuais (pedido mínimo de 10 unidades) - R$ 7,00',
      ],
    ),
    new Product(
      'Brigadeiros da Fabi',
      '(cento) R$140,00',
      '',
      '',
      [
        {
          name: 'Tradicional',
          description:
            'Brigadeiro cremoso, com um sabor único de chocolate que derrete na boca.',
          price: '',
        },
        {
          name: 'Briganinho',
          description: 'Brigadeiro de leite Ninho cremoso e suave.',
          price: '',
        },
        {
          name: 'Beijinho de coco',
          description:
            'Brigadeiro tradicional de coco cremoso, porque você merece!',
          price: '',
        },
        {
          name: 'Casadinho duo',
          description:
            'Uma dupla imbatível do nosso brigadeiro tradicional com briganinho!',
          price: '',
        },
      ],
      'https://i.postimg.cc/0jgzV7Bp/bg-beijinho.jpg',
    ),
  ];

  private dolceWeekProducts: Product[] = [];

  private christmasProducts: Product[] = [
    new Product(
      'Torta na travessa',
      '',
      '',
      '',
      [
        {
          name: 'Pavê da Fabi',
          description:
            'Creme quatro leites com frutas selecionadas de qualidade: morango, pêssego em calda e kiwi. Você vai se surpreender com a cremosidade e frescor!',
          price: '',
        },
        {
          name: 'Red Velvet com Cream Cheese',
          description:
            'Massa aveludada com sabor super especial, acompanhada de um delicioso recheio premium de Cream Cheese e mousse de leite ninho! Se surpreeenda com essa combinação!',
          price: '',
        },
        {
          name: 'Abacaxi e cocada',
          description:
            'Bolo branco e macio, creme branco com generosos pedaços de abacaxi e a cocada da Fabi que você nunca viu igual!',
          price: '',
        },
        {
          name: 'Nutelíssima',
          description:
            'Brigadeiro original de Nutella, incomparável mousse de ninho, decorada com deliciosos brigadeiros da Fabi!',
          price: '',
        },
        {
          name: 'Bombom de Morango',
          description:
            'Mousse aerada de leite ninho com uma deliciosa mousse de chocolate e morangos! Acompanhada de uma farofinha crocante de biscoitos banhados no chocolate!',
          price: '',
        },
      ],
      'https://i.postimg.cc/bvMxyb2b/pave-da-fabi.jpg',
    ),
    new Product(
      'Chocotone',
      '',
      '',
      '',
      [
        {
          name: 'Brigaderudo',
          description:
            'Chocotone todo recheado e decorado com nosso brigadeiro gourmet! De dar água na boca!',
          price: 'R$ 95,00',
        },
        {
          name: 'Prestígio',
          description:
            'Chocotone com a melhor combinação: brigadeiro e cocada! Sabores incomparáveis.',
          price: 'R$ 95,00',
        },
        {
          name: 'Nutelludo',
          description:
            'Chocotone recheado de original Nutella e brigadeiro de leite ninho.',
          price: 'R$ 110,00',
        },
      ],
      'https://i.postimg.cc/wxXpSRMb/chocotone-fabi.jpg',
    ),
    new Product(
      'Trufas',
      '',
      'Nossas trufas podem abrilhantar seu evento! Saborosas e derretem na boca com o gosto inigualável do mais puro chocolate.',
      '35g',
      [
        {
          name: 'Caixa com 6',
          description: '',
          price: 'R$ 30,00',
        },
        {
          name: 'Caixa com 15',
          description: '',
          price: 'R$ 80,00',
        },
      ],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    new Product(
      'Trufa no Pote',
      'R$ 70,00',
      'Uma lembrança para encantar! Trufa cremosa sabor dois amores no pote!',
      '230g',
      [],
      'https://i.postimg.cc/SsqnhF6B/trufa-no-pote.jpg',
    ),
  ];

  getTakeOutProducts() {
    return this.takeOutProducts.slice();
  }

  getPreOrderProducts() {
    return this.preOrderProducts.slice();
  }

  getDolceWeekProducts() {
    return this.dolceWeekProducts.slice();
  }

  getChristmasProducts() {
    return this.christmasProducts.slice();
  }
}
