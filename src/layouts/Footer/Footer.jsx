import './Footer.scss'
import Logo from '@/Components/Logo'
import { ReactComponent as LogoVK } from "@/assets/icons/SM-vk.svg"
import { ReactComponent as LogoTW } from "@/assets/icons/SM-twitter.svg"
import { ReactComponent as LogoFB } from "@/assets/icons/SM-facebook.svg"

const Footer = () => {
  return (
    <footer
      className="footer"
    >
      <div className="footer__body container">
        <div className="footer__content">
          <div className="footer__social">
            <Logo
              className="footer__logo"
              width={105}
              theme={'light'}
            />

            <div className="footer__social-links">
              <a
                className="footer__social-button button__icon"
                href="https://m.vk.com"
              >
                <LogoVK />
              </a>
              <a
                className="footer__social-button button__icon"
                href="https://twitter.com"
              >
                <LogoTW />
              </a>
              <a
                className="footer__social-button button__icon"
                href="https://www.facebook.com/"
              >
                <LogoFB
                />
              </a>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__menu-item">
              <h6 className="footer__menu-item-title">Навигация</h6>
              <ul className="footer__menu-list">
                <li className="footer__menu-list-item"><a href="#">Главная</a></li>
                <li className="footer__menu-list-item"><a href="#">Каталог</a></li>
                <li className="footer__menu-list-item"><a href="#">Оптовая продажа</a></li>
                <li className="footer__menu-list-item"><a href="#">О нас</a></li>
              </ul>
            </div>

            <div className="footer__menu-item">
              <h6 className="footer__menu-item-title">Наши контакты</h6>
              <ul className="footer__menu-list nested">
                <p className="footer__menu-list-subtitle">Телефоны</p>
                <li className="footer__menu-list-item"><a href="#">+7 (988) 565 00 38</a></li>
                <li className="footer__menu-list-item"><a href="#">+375 33 662 82 56</a></li>
                <p className="footer__menu-list-subtitle">Email</p>
                <li className="footer__menu-list-item"><a href="#">vladpertcev@mail.ru</a></li>
                <li className="footer__menu-list-item"><a href="#">korobko416@gmail.com</a></li>
              </ul>
            </div>

            <div className="footer__menu-item">
              <h6 className="footer__menu-item-title">Наш адрес</h6>
              <ul className="footer__menu-list">
                <li className="footer__menu-list-item"><a href="#">Россия, Ростов-на-Дону ул. Богачева, 16</a></li>
              </ul>
            </div>

            <div className="footer__menu-item">
              <h6 className="footer__menu-item-title">Информация</h6>
              <ul className="footer__menu-list">
                <li className="footer__menu-list-item"><a href="#">Доставка и оплата</a></li>
                <li className="footer__menu-list-item"><a href="#">Гарантии</a></li>
                <li className="footer__menu-list-item"><a href="#">Возврат товара</a></li>
              </ul>
            </div>
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
