import React from 'react';
import './LanguageChoose.css';
import {useLanguageChoose} from './useLanguageChoose';

const LanguageChoose = () => {
  const {language, languages, chooseHandler} = useLanguageChoose();

  return (
    <div className="dropdown dropdown-center language-choose">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {language}
      </button>
      <ul className="dropdown-menu">
        {languages.map(l => (
          <li key={l}>
            <button className="dropdown-item" onClick={() => chooseHandler(l)}>
              {l}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageChoose;
