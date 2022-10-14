import React from 'react';
import './Footer.css';
import {ReactComponent as Download} from '../../assets/img/google-play.svg';

const firstLinks = [
  'Довідка для покупців',
  'Отримати підтримку',
  'Як купувати',
  'Як залишити корисний відгук',
  'Програма Захисту Покупців',
  'Рекомендації з безпечних покупок'
];
const secondLinks = [
  'Довідка для продавців',
  'Як почати продавати',
  'Тарифи',
  'Угода користувача',
  'Політика конфіденційності',
  'Правила користування порталом',
  'Бонусна програма'
];
const thirdLinks = [
  'Про нас',
  'Довідка та FAQ',
  'Захист легальності контенту',
  'Адміністрація',
  'Вакансії'
];
const Footer = () => {
  return (
    <footer className="footer p-5">
      <div className="container">
        <div className="d-flex flex-column gap-2">
          {firstLinks.map(link => (
            <a href="#" className="footer__link">
              {link}
            </a>
          ))}
        </div>

        <div className="d-flex flex-column gap-2">
          {secondLinks.map(link => (
            <a href="#" className="footer__link">
              {link}
            </a>
          ))}
        </div>

        <div className="d-flex flex-column gap-2">
          {thirdLinks.map(link => (
            <a href="#" className="footer__link">
              {link}
            </a>
          ))}
        </div>

        <div>
          <p>
            <a className="pb-2 footer__link">Мобільний додаток</a>
          </p>
          <Download />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
