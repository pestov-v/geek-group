import React from 'react';

const navList = [
  {id: 1, text: 'Головна', url: '/'},
  {id: 2, text: 'Каталог', url: '/catalog'},
  {id: 3, text: 'Жінкам', url: '/women'},
  {id: 4, text: 'Чоловікам', url: '/men'},
  {id: 5, text: 'Дитячі речі', url: '/babies'},
  {id: 6, text: 'Аукціон', url: '/auction'},
  {id: 7, text: 'Бренди', url: '/brands'},
  {id: 8, text: 'Акції', url: '/sale'},
  {id: 9, text: 'Аутентифікація', url: '/authentication'},
  {id: 10, text: 'Акції', url: '/sale'},
  {id: 11, text: 'Блог', url: '/blog'}
];

const HeaderNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light header__nav">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navList.map(({id, text, url}) => (
              <li key={id} className="nav-item">
                <a className="nav-link active" aria-current="page" href={url}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
