import React from 'react';
import './AdTop.css';
import {IoIosThumbsUp} from 'react-icons/io';
import {GiLargeDress} from 'react-icons/gi';

const AdTop = () => {
  return (
    <div className="ad__top fixed-top d-flex align-items-center justify-content-center gap-2">
      <IoIosThumbsUp
        className="icon__thumbs"
        color="yellow"
        stroke="#000000"
        strokeWidth={1}
        size={32}
      />
      <GiLargeDress className="icon__dress" color="darkblue" size={32} />
      <h3 className="ad__top--title">Брендовий верхній одяг від 899 грн</h3>
    </div>
  );
};

export default AdTop;
