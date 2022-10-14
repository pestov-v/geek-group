import React from 'react';
import Logo from '../Logo';
import Search from '../Search/Search';
import LanguageChoose from '../LanguageChoose/LanguageChoose';
import HeaderAdditional from './HeaderAdditional/HeaderAdditional';

const HeaderTop = () => {
  return (
    <div className="header__top d-flex align-items-center justify-content-between gap-4 flex-grow-1">
      <Logo />
      <Search />
      <button className="btn btn-dark add-product">Додати товар</button>
      <LanguageChoose />
      <HeaderAdditional />
    </div>
  );
};

export default HeaderTop;
