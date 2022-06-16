export class Product {
  public id: number;
  public title: string;
  public price: number;
  public image: string;
  public rating: {
    rate: number;
    count: number;
  };
  public description: string;
  public category: string;

  constructor(
    id: number,
    title: string,
    price: number,
    image: string,
    rating: {
      rate: number;
      count: number;
    },
    category: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.rating = rating;
    this.category = category;
    this.description = description;
  }
}
