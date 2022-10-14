import React from 'react';
import {useProducts} from './useProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
  const {products} = useProducts();
  return (
    <div className="d-flex flex-column pb-4">
      <main className="main d-flex flex-wrap justify-content-between gap-4 pb-2">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </main>

      <Pagination pages={4} active={1} />
    </div>
  );
};

export default Main;
