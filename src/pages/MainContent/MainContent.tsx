import React from 'react';
import './MainContent.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from './Main';

const MainContent = () => {
  return (
    <div className="main-content position-relative container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-dark" href="#">
              Головна
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Каталог
          </li>
        </ol>
      </nav>

      <div className="d-flex gap-4">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default MainContent;
