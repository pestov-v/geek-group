import React from 'react';
import './Search.css';
import {BsSearch} from 'react-icons/bs';

const Search = () => {
  return (
    <div className="header__search position-relative flex-grow-1">
      <div className="input-group">
        <button className="btn btn-outline-light input-group-text bg-transparent border-0 position-absolute">
          <BsSearch />
        </button>
        <input
          type="text"
          className="form-control header__search-input"
          placeholder="Знайти речі або бренди"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default Search;
