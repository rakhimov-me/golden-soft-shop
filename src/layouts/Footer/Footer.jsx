import './Footer.scss'
import Logo from '@/Components/Logo'
import { ReactComponent as LogoVK } from "@/assets/icons/SM-vk.svg"
import { ReactComponent as LogoTW } from "@/assets/icons/SM-twitter.svg"
import { ReactComponent as LogoFB } from "@/assets/icons/SM-facebook.svg"
import Button from "@/Components/Button"

const Footer = () => {
  const menuItems = [
    {
      title: "Навигация",
      items: [
        { label: "Главная", href: "#" },
        { label: "Каталог", href: "#" },
        { label: "Оптовая продажа", href: "#" },
        { label: "О нас", href: "#" },
      ],
    },
    {
      title: "Наши контакты",
      items: [
        { subtitle: "Телефоны", items: [
            { label: "+7 (988) 565 00 38", href: "#" },
            { label: "+375 33 662 82 56", href: "#" },
          ]},
        { subtitle: "Email", items: [
            { label: "vladpertcev@mail.ru", href: "#" },
            { label: "korobko416@gmail.com", href: "#" },
          ]},
      ],
    },
    {
      title: "Наш адрес",
      items: [
        { label: "Россия, Ростов-на-Дону ул. Богачева, 16", href: "#" },
      ],
    },
    {
      title: "Информация",
      items: [
        { label: "Доставка и оплата", href: "#" },
        { label: "Гарантии", href: "#" },
        { label: "Возврат товара", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <LogoVK />, href: "https://m.vk.com" },
    { icon: <LogoTW />, href: "https://twitter.com" },
    { icon: <LogoFB />, href: "https://www.facebook.com/" },
  ]

  return (
    <footer className="footer">
      <div className="footer__body container">
        <div className="footer__content">
          <div className="footer__social">
            <Logo className="footer__logo" width={105} theme={'light'} />
            <div className="footer__social-links">
              {socialLinks.map((link, index) => (
                <a key={index} className="footer__social-button" href={link.href}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__menu">
            {menuItems.map((column, colIndex) => (
              <div key={colIndex} className="footer__menu-column">
                <h6 className="footer__menu-column-title">{column.title}</h6>
                <ul className="footer__menu-list">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="footer__menu-list-item">
                      {item.subtitle ? (
                        <p className="footer__menu-list-subtitle">{item.subtitle}</p>
                      ) : null}
                      {item.items ? (
                        item.items.map((subItem, subIndex) => (
                          <Button
                            className="nested"
                            key={subIndex}
                            mode="light"
                            label={subItem.label}
                            href={subItem.href}
                          />
                        ))
                      ) : (
                        <Button mode="light" label={item.label} href={item.href} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © 2021 Golden Soft All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer