import {useEffect, useState} from 'react';
import {getAllProducts} from '../../api';
import {IProduct} from '../../api/interfaces';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      data && setProducts(data);
    };
    fetchData();
  }, []);

  return {
    products
  };
};
