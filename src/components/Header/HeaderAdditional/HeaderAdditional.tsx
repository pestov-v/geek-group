import React from 'react';
import './HeaderAdditional.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsChatLeftText, BsCart2} from 'react-icons/bs';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';

const items = [
  {id: 1, icon: AiOutlineHeart, amount: 1, isChat: false},
  {id: 2, icon: BsChatLeftText, amount: 8, isChat: true},
  {id: 3, icon: BsCart2, amount: 3, isChat: false}
];

const HeaderAdditional = () => {
  return (
    <div className="header__additional d-flex align-items-center justify-content-between gap-4">
      {items.map(({id, icon: Icon, amount, isChat}) => (
        <button key={id} type="button" className="btn position-relative border-0 p-0">
          <Icon />
          <span
            className={[
              'position-absolute',
              'px-1',
              'badge',
              'rounded-circle',
              isChat ? 'orange' : ''
            ].join(' ')}
          >
            {amount > 99 ? '99+' : amount}
            {isChat && amount > 0 && <span className="visually-hidden">unread messages</span>}
          </span>
        </button>
      ))}
      <ProfileMenu />
    </div>
  );
};

export default HeaderAdditional;
