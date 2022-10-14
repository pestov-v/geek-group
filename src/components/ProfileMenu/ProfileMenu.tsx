import React from 'react';
import './ProfileMenu.css';

const listMenu = [{id: 1, text: 'My Profile'}];

const ProfileMenu = () => {
  return (
    <div className="dropdown dropdown-center profile-menu">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="https://picsum.photos/50" alt="profile" className="profile--img rounded-circle" />
      </button>
      <ul className="dropdown-menu">
        {listMenu.map(({id, text}) => (
          <li key={id}>
            <button className="dropdown-item">{text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMenu;
