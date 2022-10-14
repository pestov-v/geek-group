import axios from 'axios';
import {IProduct} from './interfaces';

const limit = 9;
const getAllProducts = async () => {
  try {
    const data = (await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`))
      .data;
    return data.map(product => ({
      ...product,
      oldPrice: +(product.price * 0.2).toFixed(2),
      brand: 'Louis Vuitton',
      shop: {icon: 'https://picsum.photos/50', name: 'LoveBrand', city: 'Kyiv'}
    }));
  } catch (e) {
    console.log(e);
  }
};

export {getAllProducts};
