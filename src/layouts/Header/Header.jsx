import React, {useState} from 'react';
import './Header.scss';
import Logo from '@/Components/Logo';
import PopUpButton from '@/Components/PopUpButton';
import Button from "@/Components/Button";
import Promo from "@/layouts/Header/Components/Promo";

import { ReactComponent as CartIcon } from "@/assets/icons/Cart.svg"
import { ReactComponent as LikedIcon } from "@/assets/icons/Liked.svg"

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
                  <Button href={item.href} label={item.label} className="header__menu-link" mode="dark" />
                </li>
              )
            )}
          </ul>

        </div>
        <div className="header__actions">
          <Button
            className="header__phone"
            label="+7 (966) 55 88 499"
            iconName="phone"
            hasFillIcon
            mode="transparent"
            iconSize={20}
          />
          <div className="header__actions-buttons">
            <Button
              className="header__actions-buttons-liked"
              label="Liked"
              isLabelHidden
              mode="transparent"
              iconName="Liked"   // ПОМЕНЯЙ !!!!!!!!!!!!!
              hasFillIcon
            >
              <LikedIcon />
            </Button>
            <Button
              className="header__actions-buttons-cart"
              label="Cart"
              isLabelHidden
              mode="transparent"
              // hasFillIcon
            >
              <CartIcon />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;