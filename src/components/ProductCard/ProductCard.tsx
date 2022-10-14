import React, {FC} from 'react';
import './ProductCard.css';
import {IProduct} from '../../api/interfaces';

const ProductCard: FC<IProduct> = product => {
  const {title, image, price, oldPrice} = product;
  const {brand, category, shop, description} = product;

  return (
    <div className="card border-0 product-card p-4 justify-content-between">
      <img src={image} className="card-img-top m-auto" alt="..." />
      <div className="">
        <p className="product-card__brand my-2">{brand}</p>
        <p className="product-card__title">{title}</p>
        <div className="card-body px-0 d-flex align-items-center justify-content-between">
          <p className="d-flex flex-column">
            {oldPrice && <del className="product-card__old-price">{oldPrice}</del>}
            <span>{price}</span>
          </p>
          <div className="d-flex flex-column align-items-end">
            <p className="product-card__city">{shop.city}</p>
            <p className="product-card__shop-name">{shop.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
