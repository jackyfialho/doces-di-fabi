import { Injectable } from '@angular/core';

import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private takeOutProducts: Product[] = [
    new Product(
      'Trufa de Chocolate',
      'R$ 7,90',
      'A trufa de chocolate mais cremosa que você já comeu. Feita de puro chocolate.',
      '',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
    ),
    new Product(
      'Pão de Mel da Fabi',
      'R$ 9,90',
      'O melhor pão de mel que você já comeu. Recheio de Nutella ou Doce de Leite.',
      '',
      [],
      'https://i.postimg.cc/J0gpwB6r/pao-de-mel.jpg',
      false,
      [],
      'Consultar disponibilidade.',
    ),
    new Product(
      'Brownie Recheado',
      'R$ 10,00',
      'Brigadeiro tradicional, branco e doce de leite. O melhor brownie da sua vida.',
      '',
      [],
      'https://i.postimg.cc/MTff9b7T/new-brownie.jpg',
      false,
      [],
      'Consultar disponibilidade.',
    ),
    new Product(
      'Kit Dois Amores',
      'R$ 12,00',
      'Brigadeiro gourmet tradicional e brigadeiro de leite ninho! Contém 4 brigadeiros.',
      '',
      [],
      'https://i.postimg.cc/g2jvk0kv/kit-dois-amores.jpg',
      false,
      [],
      'Consultar disponibilidade.',
    ),
    new Product(
      'Crocantinha da Fabi',
      'R$ 13,00',
      'A melhor palha italiana da sua vida! Feita com brigadeiro cremoso, nossa queridinha Nutella e biscoito crocante. Cremosidade sem limite!',
      '',
      [],
      'https://i.postimg.cc/HnF1dhz8/crocantinha-v2.png',
      false,
      [],
      'Consultar disponibilidade.',
    ),
    new Product(
      'Bolos no pote',
      'R$ 15,00',
      ' ',
      '220ml',
      [
        {
          name: 'Nutelíssimo',
          description:
            'Brigadeiro de verdadeira Nutella, massa de baunilha e mousse areada de leite Ninho, só a Fabi faz pra você!',
          imgUrl: 'https://i.postimg.cc/hPJbg3mM/nutelissimo.jpg',
        },
        {
          name: 'Ninho com Abacaxi',
          description:
            'Creme branco, massa aveludada de bolo com pedaços generosos de abacaxi e mousse areada de leite Ninho. O verdadeiro sabor da infância!',
          imgUrl: 'https://i.postimg.cc/br5xk17Q/abacaxi.jpg',
        },
        {
          name: 'Prestígio',
          description:
            'Um sucesso para ninguém colocar defeito! Feito com massa de chocolate e recheio de coco, uma pedida perfeita para quem não gosta de nada muito doce.',
          imgUrl: 'https://i.postimg.cc/wxDkwKtb/prestigio.jpg',
        },
        {
          name: 'Delícia de abacaxi',
          description:
            'Nosso famoso creme de abacaxi acompanhado de massa de baunilha e a melhor cocada cremosa da sua vida!',
          imgUrl: 'https://i.postimg.cc/R093C8Cq/delicia-de-abacaxi.jpg',
        },
      ],
      '',
    ),
    new Product(
      'Copos especiais',
      '',
      '',
      '200ml',
      [
        {
          name: 'Gelado de Maracujá',
          description:
            'Um maravilhoso mousse de maracujá com ganasche de chocolate, finalizado com gotas de chocolate ao leite.',
          price: 'R$ 17,00',
          imgUrl: 'https://i.postimg.cc/TPxrVd4H/copo-maracuja.jpg',
        },
        {
          name: 'Bombom de Morango',
          description:
            'Composto por um maravilhoso creme de leite ninho, morango e brigadeiro gourmet.',
          price: 'R$ 16,00',
          imgUrl: 'https://i.postimg.cc/CxFnTWJQ/copo-morango.jpg',
        },
        {
          name: 'Cheescake de Oreo',
          description:
            'Um maravilhoso creme Cream Cheese, farofa de Oreo e Nutella, finalizado com mini oreos.',
          price: 'R$ 16,00',
          imgUrl: 'https://i.postimg.cc/gjtmmpD2/copo-oreo.png',
        },
      ],
      '',
    ),
    new Product(
      'Fatia Slice Cake Brigaderuda',
      'R$ 18,00',
      'Você precisa experimentar esse nosso lançamento. Feita com bolo de cenoura e recheio de brigadeiro gourmet: é impossível não amar!',
      '',
      [],
      'https://i.postimg.cc/25kDxX8C/fatia-chocolate.png',
      false,
      [''],
      'Imagem ilustrativa',
    ),
    new Product(
      'Copos premium',
      'R$ 19,90',
      '',
      '250ml',
      [
        {
          name: 'Napolitano',
          description:
            'Uma deliciosa combinação de mousse de leite ninho, mousse aerado de chocolate meio amargo, brownie e geleia artesanal de frutas vermelhas.',
          imgUrl: 'https://i.postimg.cc/Pxcf2BvR/copo_napolitano.jpg',
        },
      ],
      '',
    ),
  ];

  private preOrderProducts: Product[] = [
    new Product(
      'Bolo Piscina',
      'R$ 55,00',
      '',
      '',
      [
        {
          name: 'Chocolatudo',
          description:
            'Uma deliciosa massa feita a base de cacau 50% com cobertura de brigadeiro cremoso. Perfeito para os fãs de chocolate.',
          price: '',
          imgUrl: 'https://i.postimg.cc/d1m3zn0t/bolo-chocolatudo.jpg',
        },
        {
          name: 'Cenoura',
          description:
            'Um dos nossos preferidos por aqui: massa de cenoura com cobertura de chocolate. A pedida perfeita para um lanche da tarde e reunir a criançada!',
          price: '',
          imgUrl: 'https://i.postimg.cc/MHj2kVMt/bolo-piscina-fabi.jpg',
        },
      ],
      '',
      false,
      [''],
    ),
    new Product(
      'Torta na travessa',
      '',
      '',
      '',
      [
        {
          name: 'Morango',
          description:
            'Creme cinco leites da Fabi. Morangos selecionados e brigadeiro gourmet cremoso.',
          price: '',
          imgUrl: 'https://i.postimg.cc/BQWkdXsw/torta-morango-taca.jpg',
        },
        {
          name: 'Abacaxi e cocada',
          description:
            'Creme de abacaxi com cocada cremosa e massa de baunilha fofinha! O sabor da infância!',
          price: '',
          imgUrl: 'https://i.postimg.cc/CKKT75pr/torta-abacaxi-coco.jpg',
        },
        {
          name: 'Red Velvet',
          description:
            'Massa aveludada red velvet, cream cheese e geleia de frutas vermelhas.',
          price: '',
          imgUrl: 'https://i.postimg.cc/zvVyYxrK/torta-red-velvet.jpg',
          obs: 'Imagem ilustrativa.',
        },
        {
          name: 'Gargamel',
          description:
            'Uma deliciosa torta de creme quatro leites, brigadeiro cremoso e doce de leite! E pra ficar mais saborosa: praline de castanha e biscoito amantegado! Você vai se surpreender com essa gostosura!',
          price: '',
          imgUrl: 'https://i.postimg.cc/wMSH1ptx/torta-gargamel-taca.jpg',
          obs: 'Imagem ilustrativa.',
        },
      ],
      '',
      true,
      ['Tamanho P - R$ 70,00', 'Tamanho G - R$ 120,00'],
    ),
    new Product(
      'Brigadeiro Gourmet',
      'R$ 180,00 (o cento)',
      'Brigadeiro gourmet tradicional e brigadeiro de leite ninho!',
      '',
      [],
      'https://i.postimg.cc/g2jvk0kv/kit-dois-amores.jpg',
      false,
      [''],
      'Imagem ilustrativa.',
    ),
    new Product(
      'Trufa de Chocolate',
      'R$ 350,00 (o cento)',
      'A trufa de chocolate mais cremosa que você já comeu. Feita de puro chocolate.',
      '',
      [],
      'https://i.postimg.cc/MXJcBPcC/trufa-de-chocolate.jpg',
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

  private docesNoPoteProducts: Product[] = [
    new Product(
      'Bolo  no Pote Tradicional',
      'R$ 15,00',
      ' ',
      '200g',
      [
        {
          name: 'Delícia de Abacaxi',
          description:
            'Massa de baunilha super macia, creme branco com pedaços generosos de abacaxi e a cocada da Fabi. Um sabor de infância dentro do pote.',
        },
        {
          name: 'Negresco',
          description:
            'Massa de cacau com recheio de negresco e mousse de chocolate meio amargo.',
        },
        {
          name: 'Nutelíssimo',
          description:
            'Massa de baunilha, brigadeiro de Nutella e mousse de leite ninho da Fabi.',
        },
        {
          name: 'Chocolatudo',
          description:
            'Massa de cacau, mousse de chocolate meio amargo e creme de chocolate.',
        },
      ],
      'https://i.postimg.cc/tT8LxH5Q/novo-bolo-pote-2.jpg',
    ),
    new Product(
      'Bolo  no Pote Premium',
      'R$ 16,00',
      ' ',
      '200g',
      [
        {
          name: 'Red Velvet',
          description:
            'Massa aveludada e saborizada com geleia artesanal de morango, cream cheese e geleia de frutas vermelhas.',
        },
        {
          name: 'Frutas Vermelhas',
          description:
            'Massa de baunilha com geleia artesanal de frutas vermelhas e mousse de leite ninho.',
        },
      ],
      'https://i.postimg.cc/mZFKTMdP/novo-red-velvet.jpg',
    ),

    new Product(
      'Caixa de trufas',
      'R$ 12,00',
      'Nossas trufas cremosas dentro de uma caixa de amor com quatro unidades.',
      '100g',
      [],
      'https://i.postimg.cc/SN6wJ3Y3/caixa-de-trufas.jpg',
    ),
    new Product(
      'Crocantinha',
      'R$ 13,00',
      'Nossa crocantinha está de volta! Brigadeiro cremoso recheado de Nutella todo envolvido em negresco.',
      '70g',
      [],
      'https://i.postimg.cc/HnF1dhz8/crocantinha-v2.png',
    ),
    new Product(
      'Brownie no Pote',
      'R$ 16,00',
      'Nosso maravilhoso brownie com recheio de caramelo salgado e brigadeiro meio amargo.',
      '200g',
      [],
      'https://i.postimg.cc/3xxm7jKp/novo-bolo-pote.jpg',
    ),
    new Product(
      'Pão de Mel no Pote',
      'R$ 16,00',
      'Massa de pão de mel, doce de leite cremoso e ganasche meio amargo.',
      '200g',
      [],
      'https://i.postimg.cc/QtF2CMcJ/pao-de-mel-no-pote.jpg',
    ),
    new Product(
      'Gelado de Maracujá',
      'R$ 16,00',
      'Mousse de maracujá com ganasche de chocolate.',
      '200g',
      [],
      'https://i.postimg.cc/TPxrVd4H/copo-maracuja.jpg',
    ),
    new Product(
      'Bombom de uva',
      'R$ 16,00',
      'Creme de cinco leites com brigadeiro e uvas verdes.',
      '200g',
      [],
      'https://i.postimg.cc/GhZPpJJR/copo-uva.jpg',
    ),
  ];

  private giveAwayProducts: Product[] = [
    new Product(
      'Verrines',
      'R$ 25,00',
      '',
      '200g',
      [
        {
          name: 'Frutas Vermelhas',
          description:
            'Mousse de leite ninho, geleia de frutas vermelhas e biscoito crocante da Fabi.',
        },
        {
          name: 'Abacaxi e Cocada Cremosa',
          description:
            'Nosso creme de abacaxi acompanhado de uma deliciosa cocada e biscoito crocante.',
        },
        {
          name: 'Duo',
          description:
            'Mousse de leite ninho, brigadeiro cremoso e um toque de geleia artesanal acompanhada do crocante da Fabi.',
        },
        {
          name: 'Chocolatuda',
          description:
            'Brigadeiro meio amargo cremoso, brigadeiro branco e crocante de chocolate.',
        },
      ],
      'https://i.postimg.cc/7h7j1QsC/verrines.jpg',
    ),
    new Product(
      'Mini-caixa presente',
      'R$ 49,90',
      '4 trufas de chocolate e 1 bolo de pote personalizado (consultar sabores disponíveis). Opção de cores: verde e vermelha.',
      '',
      [],
      'https://i.postimg.cc/NGHhw5sg/mini-caixa-presente.jpg',
    ),
  ];

  private desertsProducts: Product[] = [
    new Product(
      'Torta na travessa',
      '',
      '',
      '',
      [
        {
          name: 'Morango',
          description:
            'Creme cinco leites da Fabi, morangos selecionados, massa de baunilha e brigadeiro cremoso.',
          price: '',
          imgUrl: 'https://i.postimg.cc/BQWkdXsw/torta-morango-taca.jpg',
        },
        {
          name: 'Delícia de Abacaxi',
          description:
            'Creme branco envolvido com pedaços generosos de abacaxi, massa de baunilha e cocada cremosa.',
          price: '',
          imgUrl: 'https://i.postimg.cc/CKKT75pr/torta-abacaxi-coco.jpg',
        },
        {
          name: 'Red Velvet',
          description:
            'Massa aveludada com sabor diferenciado de geleia artesanal, recheio de frutas vermelhas e cream cheese.',
          price: '',
          imgUrl: 'https://i.postimg.cc/zvVyYxrK/torta-red-velvet.jpg',
          obs: 'Imagem ilustrativa.',
        },
        {
          name: 'Gargamel',
          description:
            'Creme de cinco leites da Fabi, brigadeiro cremoso, mousse de doce de leite e praline de castanha de caju.',
          price: '',
          imgUrl: 'https://i.postimg.cc/wMSH1ptx/torta-gargamel-taca.jpg',
          obs: 'Imagem ilustrativa.',
        },
      ],
      '',
      true,
      [
        'Tamanho P - R$ 130,00 (serve aprox. 6 pessoas)',
        'Tamanho G - R$ 180,00 (serve aprox. 10 pessoas)',
      ],
    ),
  ];

  private eventsProducts: Product[] = [
    new Product(
      'Trufas de Chocolate',
      'R$ 330,00 (o cento)',
      '',
      '',
      [],
      'https://i.postimg.cc/SN6wJ3Y3/caixa-de-trufas.jpg',
      true,
      ['Pedido mínimo: 25 unidades.'],
    ),
    new Product(
      'Mini Pote de Brigadeiro',
      'R$ 5,00/cada',
      '',
      '',
      [
        {
          name: 'Brigadeiro Tradicional',
        },
        {
          name: 'Brigadeiro branco',
        },
        {
          name: 'Brigadeiro de leite ninho',
        },
      ],
      'https://i.postimg.cc/g0t9GhL0/mini-pote-brigadeiro.jpg',
      true,
      ['Pedido mínimo: 25 unidades.'],
      'Imagem ilustrativa',
    ),
    new Product(
      'Bolo no pote versão aniversário',
      'R$ 8,00/cada',
      '',
      '',
      [
        {
          name: 'Nutelíssimo',
        },
        {
          name: 'Chocolatudo',
        },
        {
          name: 'Abacaxi e cocada',
        },
        {
          name: 'Negresco',
        },
        {
          name: 'Prestígio',
        },
      ],
      'https://i.postimg.cc/QxG2NhCc/brigadeiro-aniversario.jpg',
      true,
      ['Pedido mínimo: 25 unidades.'],
      'Imagem ilustrativa',
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

  getDocesNoPoteProducts() {
    return this.docesNoPoteProducts.slice();
  }

  getGiveAwayProducts() {
    return this.giveAwayProducts.slice();
  }

  getDesertsProducts() {
    return this.desertsProducts.slice();
  }

  getEventsProducts() {
    return this.eventsProducts.slice();
  }
}
