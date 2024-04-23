export interface ICategory {
  id: string;
  name: string;
  image: string;
  data: string;
}

export interface IBeerData {
  _id: string;
  name: string;
  img: string;
  maker: string;
  maker_logo: string;
  origin: string;
  color: string;
  style: string;
  grade: string;
  IBU: string;
  flavor: string;
  graphic_color: string;
  ingredients: string;
  url: string;
}
