export class Product {
  public name: string;
  public price: string;
  public description: string;
  public weight?: string;
  public flavors?: {
    name: string;
    description?: string;
    price?: string;
    extraInfos?: boolean;
    extraInfo1?: string;
    extraInfo2?: string;
    imageUrl?: string;
    obs?: string;
  }[];
  public imagePath?: string;
  public hasMoreInfos?: boolean;
  public moreInfosArray?: string[];
  public observation?: string;

  constructor(
    name: string,
    price: string,
    desc: string,
    weight?: string,
    flavs?: {
      name: string;
      description?: string;
      price?: string;
      extraInfos?: boolean;
      extraInfosArray?: string[];
      imgUrl?: string;
      obs?: string;
    }[],
    imgPath?: string,
    hasMoreInfos?: boolean,
    moreInfosArray?: string[],
    observation?: string,
  ) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.weight = weight;
    this.flavors = flavs;
    this.imagePath = imgPath;
    this.hasMoreInfos = hasMoreInfos;
    this.moreInfosArray = moreInfosArray;
    this.observation = observation;
  }
}
