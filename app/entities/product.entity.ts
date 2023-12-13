export interface Matches {
  url: string;
  name?: string;
  price?: number;
  rating?: number;
  reviews?: number;
  lastUpdate?: Date;
}

export interface Product {
  _id: string;
  name: string;
  image?: string;
  sku?: string;
  urls?: Matches[];
}

export interface PostProduct {
  name: string;
  image?: string;
  sku?: string;
  urls?: Matches[];
}