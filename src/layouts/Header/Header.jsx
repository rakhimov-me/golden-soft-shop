import React, {useState} from 'react';
import './Header.scss';
import Logo from '@/Components/Logo';
import PopUpButton from '@/Components/PopUpButton';


const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', popup: true },
    { label: 'Отопая продукция', href: '/heating' },
    { label: 'О нас', href: '/about' },
  ];

  const catalogSubmenu = [
    'Замки для квартиры',
    'Врезные замки',
    'Замки для двери',
    'Замки для отелей',
    'Замки для офиса',
    'Замки для шкафчиков',
    'Замки для раздевалок',
  ];

  return (
    <header className="header">
      <div className="header__promo">
        <div className="header__promo-body container">
          <p></p>
          <p className="header__promo-text">Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>
          <a href="#">Обратный звонок</a>
        </div>
      </div>
      <div className="header__inner container">
        <div className="header__body">
          <Logo className="header__body-logo" width={50} />

          <ul className="header__menu">
            {menuItems.map((item, index) =>
              item.popup ? (
                <li key={index}>
                  <PopUpButton
                    label={item.label}
                    items={catalogSubmenu}
                    className="header__menu-link"
                  />
                </li>
              ) : (
                <li key={index}>
                  <a href={item.href} className="header__menu-link">
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

        </div>
        <div className="header__actions">
          <a href="tel:+79665588499" className="header__phone">
            <img
              src="/src/assets/icons/phone.svg"
              className="header__phone-icon"
              width={18}
            />
            +7 (966) 55 88 499
          </a>
          <div className="header__buttons">
            <button className="header__actions-button button__icon">
              <svg width="32.000000" height="32.000000" className="button__icon-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="clip28_6195">
                    <rect id="Frame" rx="0.000000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                  </clipPath>
                </defs>
                <rect id="Frame" rx="0.000000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip28_6195)">
                  <path id="Vector" d="M5 10.82C5 13.42 6 19.59 15.91 25.83C16.08 25.94 16.29 26 16.5 26C16.7 26 16.91 25.94 17.08 25.83C26.99 19.59 28 13.42 28 10.82C28 7.6 25.42 5 22.25 5C19.07 5 16.5 8.53 16.5 8.53C16.5 8.53 13.92 5 10.75 5C7.57 5 5 7.6 5 10.82Z" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>
            <button className="header__actions-button button__icon">
              <svg width="32.000000" height="32.000000" className="button__icon-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="clip20_7272">
                    <rect id="Frame" rx="0.000000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                  </clipPath>
                </defs>
                <rect id="Frame" rx="0.000000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                <g clip-path="url(#clip20_7272)">
                  <path id="Vector" d="M25.05 9.33C25.42 9.33 25.79 9.41 26.13 9.56C26.47 9.71 26.78 9.93 27.03 10.21C27.28 10.48 27.47 10.81 27.58 11.16C27.7 11.52 27.74 11.89 27.7 12.26L26.9 20.26C26.84 20.92 26.53 21.53 26.04 21.97C25.55 22.42 24.91 22.66 24.25 22.66L11.52 22.66C10.9 22.66 10.3 22.45 9.82 22.06C9.35 21.67 9.02 21.12 8.9 20.52L6.66 9.33L25.05 9.33Z" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
                  <path id="Vector" d="M6.66 9.33L5.58 5C5.51 4.72 5.34 4.46 5.11 4.28C4.87 4.09 4.59 4 4.29 4L2.66 4" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M10.66 28L13.33 28" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M21.33 28L23.99 28" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;