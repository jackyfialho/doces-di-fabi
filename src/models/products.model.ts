export class Product {
  public name: string;
  public price: string;
  public description: string;
  public flavors?: string;
  public weight?: string;
  public imagePath?: string;

  constructor(
    name: string,
    price: string,
    desc: string,
    weight?: string,
    flavs?: string,
    imgPath?: string,
  ) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.weight = weight;
    this.flavors = flavs;
    this.imagePath = imgPath;
  }
}