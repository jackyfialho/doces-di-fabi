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
            'Feito com nosso delicioso brigadeiro tradicional e brigadeiro 4 leites! Finalizamos com o preferido de todos: brigadeiros gourmet! Você merece essa delícia!',
        },
        {
          name: 'Oreo',
          description:
            'Nosso delicioso brigadeiro com mousse aerada de leite ninho! Para os amantes eternos do Oreo.',
        },
      ],
      'https://i.postimg.cc/VkPhyW1M/copo-supreme-oreo.jpg',
    ),
    new Product(
      'Caixa de Trufas',
      'a partir de R$ 19,90',
      'Nossas trufas são irresistíveis: característico sabor de chocolate que derrete na primeira mordida. É sabor que não acaba mais!',
      '',
      [
        {
          name: '4 unidades',
          price: 'R$ 19,90',
        },
        {
          name: '6 unidades',
          price: 'R$ 29,90',
        },
        {
          name: 'Individuais',
          price: 'R$ 5,90 (cada)*',
          description: '*apenas para pedidos acima de 5 unidades',
        },
      ],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    // new Product(
    //   'Super Fatia da Fabi',
    //   'R$ 19,00',
    //   'Uma generosa fatia gelada de chocolate, com mousse de leite ninho, pedaços do nosso Oreo de brigadeiro cremoso. Uma verdadeira explosão de fatia.',
    //   '',
    //   [],
    //   'https://i.postimg.cc/J056TxDP/fatia-supreme-oreo.jpg',
    // ),
    // new Product(
    //   'Delicioso bolo Piscina da Fabi!',
    //   'R$ 79,00',
    //   'Versão cenoura e chocolate! Bolo macio! Perfeito pra uma café da tarde cheio de sabor, coberto com ganasche de chocolate!',
    //   '800g',
    //   [],
    //   'https://i.postimg.cc/MHj2kVMt/bolo-piscina-fabi.jpg',
    // ),
    // new Product(
    //   'Caserinho de cenoura  e chocolate!',
    //   'R$ 25,90',
    //   'Sabor que só a Fabi faz!',
    //   '350g',
    //   [],
    //   'https://i.postimg.cc/Px7sF2xP/caseirinho-chocolate.jpg',
    // ),
    new Product(
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
      'https://i.postimg.cc/59zLvDyQ/torta-compartilhada-abacaxi.jpg',
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
    ),
  ];

  private preOrderProducts: Product[] = [
    new Product(
      'Torta na travessa',
      '',
      '',
      '',
      [
        {
          name: 'Abacaxi com ninho',
          description:
            'Torta com generosos pedaços de abacaxi e nossa mousse aerada de leite ninho! Um sabor que nos remete a infância! Você merece a melhor e a Fabi faz pra você! ',
          price: '',
        },
        {
          name: 'Danet da Fabi',
          description:
            'Uma sobremesa para toda a família! Feita com uma deliciosa massa de bolo, nosso Danet especial e mousse aerada de leite ninho. Além de brigadeiros para decorar!',
          price: '',
        },
        {
          name: 'Brigadeiríssima de Nutella',
          description:
            'Torta feita com o verdadeiro brigadeiro de Nutella que só a Fabi faz pra sua família! Vocês merecem experimentar e se deliciar! Nossa mousse aerada faz toda a diferença nessa torta!',
          price: '',
        },
        {
          name: 'Red Velvet com Cream Cheese',
          description:
            'Massa aveludada com sabor super especial, acompanhada de um delicioso recheio premium de Cream Cheese e mousse de leite ninho! Se surpreeenda com essa combinação!',
          price: '',
        },
      ],
      'https://i.postimg.cc/CKDW6qyq/nova-taca.jpgg',
    ),
    new Product(
      'Trufas de chocolate',
      '(cento) R$ 290,00',
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
    new Product(
      'Bombom de morango',
      '',
      'Nossa mousse aerada de leite ninho com morangos e ganasche de chocolate.',
      '',
      [],
      'https://i.postimg.cc/RZw6SgKp/bombom-morango.jpg',
    ),
    new Product(
      'Bombom surpresa de uva',
      '',
      'Creme de leite ninho com uvas selecionadas, ganasche de chocolate meio amargo e nosso maravilhos brownie chocolatudo.',
      '',
      [],
      'https://i.postimg.cc/rwTWr6V2/supresa-uva.jpg',
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
        }
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
          description: 'Chocotone todo recheado e decorado com nosso brigadeiro gourmet! De dar água na boca!',
          price: 'R$ 95,00',
        },
        {
          name: 'Prestígio',
          description: 'Chocotone com a melhor combinação: brigadeiro e cocada! Sabores incomparáveis.',
          price: 'R$ 95,00',
        },
        {
          name: 'Nutelludo',
          description: 'Chocotone recheado de original Nutella e brigadeiro de leite ninho.',
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
          name: 'Caixa com 12',
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
