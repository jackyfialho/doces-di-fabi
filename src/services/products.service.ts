import { Injectable } from '@angular/core';

import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private takeOutProducts: Product[] = [
    new Product(
      'Bolos de pote',
      'R$ 15,00',
      ' ',
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
          name: 'Sensação',
          description:
            'Massa de chocolate aerada, acompanhada de um delicioso creme de chocolate e morango com frutas vermelhas, o Danone da Fabi!',
        },
      ],
      'https://i.postimg.cc/rmzt2tXP/bolo-de-pote.jpg',
    ),
    new Product(
      'Torta no pote',
      'R$ 16,00',
      '',
      '200ml',
      [
        {
          name: 'Gelado de Maracujá',
          description:
            'Um maravilhoso mousse de maracujá, ganasche de chocolate e um delicioso chantilly!',
        },
        {
          name: 'Gelado de Limão',
          description:
            'Um refrescante mousse de limão acompanhado de uma farofa crocante e chantilly!',
        },
      ],
      'https://i.postimg.cc/j2py8STJ/torta-pote-maracuja.jpg',
    ),
    new Product(
      'Bombom no pote',
      'R$ 16,00',
      '',
      '200ml',
      [
        {
          name: 'Surpresa de uva',
          description:
            'Creme de cinco leites da Fabi, uvas selecionadas e brigadeiro cremoso!',
        },
        {
          name: 'KitKat',
          description:
            'Creme de Nhá Benta com pedaços de KitKat e mousse de chocolate.',
        },
        {
          name: 'Dois amores',
          description:
            'Nossa deliciosa mousse de leite ninho com brigadeiro cremoso e gotas de chocolate.',
        },
      ],
      'https://i.postimg.cc/kgpj3yQg/bombom-no-pote.jpg',
    ),
    new Product(
      'Crocantinha da Fabi',
      'R$ 13,00',
      'A melhor palha italiana da sua vida! Feita com brigadeiro cremoso, nossa queridinha Nutella e biscoito crocante! Cremosidade sem limite!',
      '',
      [],
      'https://i.postimg.cc/HnF1dhz8/crocantinha-v2.png',
    ),
    new Product(
      'Fudge Laka Oreo da Fabi',
      'R$ 13,00',
      'Deliciosa palha italiana de chocolate branco e Oreo.',
      '',
      [],
      'https://i.postimg.cc/WzsRF7fP/fudge-laka.jpg',
    ),
    new Product(
      'Trufas de chocolate da Fabi',
      '(unid. R$ 7,00)',
      'Você nunca comeu uma trufa tão cremosa! O chocolate derrete na boca',
      '',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    // new Product(
    //   'Copo Supreme da Fabi',
    //   'R$ 20,00',
    //   ' ',
    //   '250ml',
    //   [
    //     {
    //       name: 'Kit Kat',
    //       description:
    //         'Nhá Benta com Kit Kat e mousse de chocolate, finalizada com o melhor brownie da sua vida! Porque você merece!',
    //     },
    //     {
    //       name: 'Dois Amores',
    //       description:
    //         'Nossa deliciosa mousse de Ninhho com brigadeiro cremoso e pedaços de chocolate.',
    //     },
    //   ],
    //   'https://i.postimg.cc/zGdPLZKw/copo-supreme-duo-de-brigadeiro.jpg',
    // ),
    // new Product(
    //   'Copo Supreme Premium',
    //   'R$ 25,00',
    //   ' ',
    //   '340ml',
    //   [
    //     {
    //       name: 'Napolitano',
    //       description:
    //         'Mousse de Danoninho da Fabi acompanhada do melhor brownie, mousse de leite ninho e mousse de chocolate. Uma perfeição de copo!',
    //     },
    //     {
    //       name: 'Laka Oreo',
    //       description:
    //         'Brigadeiro cremoso, mousse da Laka Oreo, nosso brownie e bombons Ouro Branco.',
    //     },
    //   ],
    //   'https://i.postimg.cc/GmNh945y/copo-supreme-fabi.jpg',
    // ),
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
          extraInfosArray: ['Tamanho G - R$ 180,00', 'Tamanho P - R$ 99,90'],
        },
        {
          name: 'Abacaxi com ninho',
          description:
            'Creme branco, massa aveludada de bolo com pedaços generosos de abacaxi e mousse aerada de leite Ninho. O verdadeiro sabor da infância!',
          price: '',
          extraInfos: true,
          extraInfosArray: ['Tamanho G - R$ 160,00', 'Tamanho P - R$ 90,00'],
        },
      ],
      'https://i.postimg.cc/CKDW6qyq/nova-taca.jpg',
      true,
      ['Tamanho P: serve até 5 pessoas', 'Tamanho G: serve até 12 pessoas'],
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
          extraInfosArray: ['Tamanho G - R$ 130,00', 'Tamanho P - R$ 80,00'],
        },
        {
          name: 'Dois Amores',
          description:
            'Torta mousse de chocolate com nossa deliciosa mousse de leite Ninho! Essa combinação não tem erro!',
          price: '',
          extraInfos: true,
          extraInfosArray: ['Tamanho G - R$ 150,00', 'Tamanho P - R$ 90,00'],
        },
      ],
      'https://i.postimg.cc/rwTWr6V2/supresa-uva.jpg',
      true,
      ['Tamanho P: serve até 5 pessoas', 'Tamanho G: serve até 12 pessoas'],
    ),
    new Product(
      'Brownie Onstentação*',
      '',
      'Nosso maravilhoso brownie em cubos, com mousse de doce de leite cremoso e ganasche de chocolate meio amargo. *Foto da taça ilustrativa',
      '',
      [],
      'https://i.postimg.cc/fTw9zDfc/brownie-onstentacao-2.jpg',
      true,
      [
        'Tamanho P (serve até 5 pessoas) - R$ 95,00',
        'Tamanho G (serve até 12 pessoas) - R$ 170,00',
      ],
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

  private easterProducts: Product[] = [
    new Product(
      'Kit Kat',
      'R$ 119,90',
      'Ovo cravejado de chocolate Kit Kat e recheado com brigadeiro cremoso de nossa palha italiana',
      '980g',
      [],
      'https://i.postimg.cc/YSCTrPZT/ovo-kit-kat.jpg',
    ),
    new Product(
      'Laka Oreo',
      'R$ 119,90',
      'Ovo cravejado com pedaços de laka e recheio cremoso de oreo da Fabi',
      '980g',
      [],
      'https://i.postimg.cc/MTNGbV1K/ovo-laka-oreo.jpg',
    ),
    new Product(
      'Finni',
      'R$ 119,90',
      'Ovo cravejado de chocolate e brigadeiro cremoso',
      '980g',
      [],
      'https://i.postimg.cc/bNHzdKVv/ovo-finni.jpg',
    ),
    new Product(
      'Trufado',
      'R$ 119,90',
      'Ovo de casca recheada no sabor prestígio ou a maravilhosa trufa de chocolate da Fabi',
      '980g',
      [],
      'https://i.postimg.cc/zv7cYSpq/ovo-trufado.jpg',
    ),
    new Product(
      'Kinder',
      'R$ 89,90',
      'Ovo de colher com recheio tipo kinder , finalizado com barrinhas de chocolate ',
      '700g',
      [],
      'https://i.postimg.cc/fW5fkzZW/ovo-kinder.jpg',
    ),
    new Product(
      'Ninho e Nutella',
      'R$ 89,90',
      'Ovo de colher recheado com nutela e briganinho',
      '700g',
      [],
      'https://i.postimg.cc/8czbM8BV/ovo-colher-ninho-nutela.jpg',
    ),
    new Product(
      'Crocantinho',
      'R$ 89,90',
      'Ovo de colher com casca texturizada branca, biscoito crocante, Nutella e brigadeiro cremoso 5 leites',
      '700g',
      [],
      'https://i.postimg.cc/XJQfVHM1/ovo-crocantinho.jpg',
    ),
    new Product(
      'Especial Brownie Brigadeiro',
      'R$ 89,90',
      'Nosso maravilhoso brownie recheado de brigadeiro',
      '',
      [],
      'https://i.postimg.cc/GmGvBhwy/ovo-brownie.jpg',
    ),
    new Product(
      'Especial Maracujá',
      'R$ 59,90*',
      'Ovo com recheio cremoso de maracujá. Obs: valor com desconto somente na prévia! Consulte período',
      '',
      [],
      'https://i.postimg.cc/gc7hN6Gh/ovo-maracuja.jpg',
    ),
    new Product(
      'Ovo de Pote',
      'R$ 44,90',
      'Opção de presente com a versão dos nossos ovos em potinhos charmosos de vidro',
      '200ml',
      [],
      'https://i.postimg.cc/QxLnkNwQ/ovo-de-pote.jpg',
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

  getEasterProducts() {
    return this.easterProducts.slice();
  }
}
