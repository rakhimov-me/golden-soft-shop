import React, {useState} from 'react';
import './Header.scss';
import Logo from '@/Components/Logo';
import PopUpButton from '@/Components/PopUpButton';
import { ReactComponent as LikedButton} from "@/assets/icons/LikedButton.svg";
import { ReactComponent as CartButton} from "@/assets/icons/CartButton.svg";
import Icon from "@/Components/Icon";
import Button from "@/Components/Button/index.js";
import Promo from "@/layouts/Header/Components/Promo/index.js";


const Header = (props) => {
  const {
    hasPromo = true,
  } = props;

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
      {hasPromo && (<Promo  />)}
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
            <Icon
              className="header__phone-icon"
              name='PhoneIcon'
              hasFill
            />
            +7 (966) 55 88 499
          </a>
          <div className="header__buttons">
            <button className="header__actions-button button__icon">
              <LikedButton className="button__icon-svg"/>
            </button>
            <button className="header__actions-button button__icon">
              <CartButton className="button__icon-svg"/>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;