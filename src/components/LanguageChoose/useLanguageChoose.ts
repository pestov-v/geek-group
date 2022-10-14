import {useState} from 'react';

export type TLanguages = 'Укр' | 'Англ' | 'Фран';
const languages: TLanguages[] = ['Укр', 'Англ', 'Фран'];

export const useLanguageChoose = () => {
  const [language, setLanguage] = useState<TLanguages>(languages[0]);

  const chooseHandler = (language: TLanguages) => setLanguage(language);

  return {
    language,
    languages,
    chooseHandler
  };
};
