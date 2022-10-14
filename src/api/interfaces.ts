export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  oldPrice: number;
  rating: {rate: number; count: number};
  title: string;
  brand: string;
  shop: {
    icon: string;
    name: string;
    city: string;
  };
}
