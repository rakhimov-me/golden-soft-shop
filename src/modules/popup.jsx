import React, { useState, useRef } from 'react';
import { useClickOutside } from './use-click-outside.js';

const PopupMenu = ({ items, onToggle, isOpen }) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    console.log('Click outside detected, closing menu');
    if (isOpen) onToggle();
  });

  return (
    <nav className={`submenu ${isOpen ? 'active' : ''}`} ref={menuRef}>
      <ul className="submenu__list">
        {items.map((item, index) => (
          <li key={index} className="submenu__item">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HeaderMenu = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const menuItems = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', submenu: true },
    { label: 'Отопая продукция', href: '/multi-order' },
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

  const handleToggleMenu = () => {
    console.log('Toggling menu, isCatalogOpen:', !isCatalogOpen);
    setIsCatalogOpen(!isCatalogOpen);
  };

  return (
    <ul className="header__menu">
      {menuItems.map((item, index) =>
        item.submenu ? (
          <li key={index}>
            <button className="header__menu-link" onClick={handleToggleMenu}>
              {item.label}
            </button>
            <PopupMenu items={catalogSubmenu} onToggle={handleToggleMenu} isOpen={isCatalogOpen} />
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
  );
};

export { HeaderMenu };