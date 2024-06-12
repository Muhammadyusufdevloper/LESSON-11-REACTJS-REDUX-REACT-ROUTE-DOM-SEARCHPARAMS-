import { Link } from "react-router-dom";
import "./Header.scss";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosPhonePortrait, IoMdCloseCircleOutline } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki, FaTelegramPlane } from "react-icons/fa";
import { TfiAlignLeft } from "react-icons/tfi";
import { useState, useEffect } from "react";
import logoImg from "../../assets/header/logo.png";

const Header = () => {
    const [shoMenu, setSowMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header-top">
                <nav className="container header-top__navbar">
                    <button onClick={() => setSowMenu(true)} className="header-top__menu"><TfiAlignLeft /></button>
                    <ul className="header-top__list">
                        <li className="header-top__item">
                            <Link to="#">
                                Гарантия свежести
                            </Link>
                        </li>
                        <li className="header-top__item">
                            <Link to="#">
                                Доставка и оплата
                            </Link>
                        </li>
                        <li className="header-top__item">
                            <Link to="#">
                                Оптовые поставки
                            </Link>
                        </li>
                        <li className="header-top__item">
                            <Link to="#">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <Link to="/" className="header-top__top-logo">
                        <img src={logoImg} alt="logo img" />
                    </Link>
                    <div className="header-top__right-wrapper">
                        <div className="header-top__location">
                            <CiLocationOn />
                            <span>Санкт-Петербург</span>
                            <MdKeyboardArrowUp className={'header-top__location-svg'} />
                        </div>
                        <a href="tel:+88123098288" className="header-top__phone">
                            <IoIosPhonePortrait />
                            <span>8 812 309-82-88</span>
                        </a>
                        <Link to="#" className="header-top__cart">
                            <BsCart />
                            <span>В корзине (4 товара)</span>
                        </Link>
                        <div className="header-top__networking">
                            <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                                <FaTelegramPlane />
                            </a>
                            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                                <SlSocialVkontakte />
                            </a>
                            <a href="https://ok.ru/" target="_blank" rel="noopener noreferrer">
                                <FaOdnoklassniki />
                            </a>
                        </div>
                    </div>
                    <Link to="#" className="header-top__cart header-top__top-cart-import">
                        <BsCart />
                        <span>В корзине (4 товара)</span>
                    </Link>
                </nav>
            </header>
            <header className={`header-bottom ${scrollY > 30 ? "header-bottom-shrink" : ""}`}>
                <nav className="container header-bottom__bottom-navbar">
                    <ul className="header-bottom__bottom-list">
                        <li className="header-bottom__item">
                            <Link to="#" className="header-bottom__bottom-link">СЛАДКИЕ ДНИ</Link>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#E7426A" />
                                <path d="M11.1192 11.09C10.6692 11.55 10.0892 11.78 9.37916 11.78C8.66916 11.78 8.08916 11.55 7.63916 11.09C7.19916 10.62 6.97916 10.035 6.97916 9.335C6.97916 8.625 7.20416 8.035 7.65416 7.565C8.10416 7.085 8.67916 6.845 9.37916 6.845C10.0892 6.845 10.6692 7.085 11.1192 7.565C11.5792 8.035 11.8092 8.625 11.8092 9.335C11.8092 10.035 11.5792 10.62 11.1192 11.09ZM9.24416 17H8.43416L14.8242 6.995H15.6492L9.24416 17ZM16.3392 16.49C15.8892 16.95 15.3092 17.18 14.5992 17.18C13.8892 17.18 13.3092 16.95 12.8592 16.49C12.4192 16.02 12.1992 15.435 12.1992 14.735C12.1992 14.025 12.4242 13.435 12.8742 12.965C13.3242 12.485 13.8992 12.245 14.5992 12.245C15.3092 12.245 15.8892 12.485 16.3392 12.965C16.7892 13.435 17.0142 14.025 17.0142 14.735C17.0142 15.435 16.7892 16.02 16.3392 16.49ZM8.29916 10.55C8.57916 10.87 8.93916 11.03 9.37916 11.03C9.81916 11.03 10.1842 10.87 10.4742 10.55C10.7642 10.22 10.9092 9.815 10.9092 9.335C10.9092 8.835 10.7642 8.425 10.4742 8.105C10.1942 7.775 9.82916 7.61 9.37916 7.61C8.93916 7.61 8.57916 7.775 8.29916 8.105C8.01916 8.425 7.87916 8.835 7.87916 9.335C7.87916 9.815 8.01916 10.22 8.29916 10.55ZM13.5042 15.95C13.7942 16.27 14.1592 16.43 14.5992 16.43C15.0392 16.43 15.4042 16.27 15.6942 15.95C15.9842 15.62 16.1292 15.215 16.1292 14.735C16.1292 14.235 15.9842 13.825 15.6942 13.505C15.4142 13.175 15.0492 13.01 14.5992 13.01C14.1492 13.01 13.7842 13.175 13.5042 13.505C13.2242 13.825 13.0842 14.235 13.0842 14.735C13.0842 15.215 13.2242 15.62 13.5042 15.95Z" fill="white" />
                            </svg>
                        </li>
                        <li className="header-bottom__bottom-item">
                            <select className="header-bottom__bottom-link">
                                <option value="подарочные наборы">подарочные наборы</option>
                            </select>
                        </li>
                        <li className="header-bottom__bottom-item">
                            <Link to="#" className="header-bottom__bottom-link">Собрать набор</Link>
                        </li>
                    </ul>
                    <Link to="/" className={`header-bottom__bottom-logo ${scrollY > 30 ? "header-bottom__bottom-logo-shrink" : ""}`}>
                        <img src={logoImg} alt="logo img" />
                    </Link>
                    <ul className="header-bottom__bottom-list">
                        <li className="header-bottom__bottom-item">
                            <Link to="#" className="header-bottom__bottom-link">Создать дизайн</Link>
                        </li>
                        <li className="header-bottom__bottom-item">
                            <select className="header-bottom__bottom-link">
                                <option value="подарочные наборы">КОМПАНИЯМ</option>
                            </select>
                        </li>
                        <li className="header-bottom__item">
                            <select className="header-bottom__bottom-link">
                                <option value="подарочные наборы">ВЕСЬ КАТАЛОГ</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>
            <div onClick={() => setSowMenu(false)} className={`header__overly ${shoMenu ? "header__overly-show" : ""}`}></div>
            <div className={`header__response-card ${shoMenu ? "header__response-card-show" : ""}`}>
                <button onClick={() => setSowMenu(false)} className="header__close"><IoMdCloseCircleOutline /></button>
                <ul className={`header-top__list header__list ${shoMenu ? "header__list-show" : ""}`}>
                    <li className="header-top__item">
                        <Link to="#">
                            Гарантия свежести
                        </Link>
                    </li>
                    <li className="header-top__item">
                        <Link to="#">
                            Доставка и оплата
                        </Link>
                    </li>
                    <li className="header-top__item">
                        <Link to="#">
                            Оптовые поставки
                        </Link>
                    </li>
                    <li className="header-top__item">
                        <Link to="#">
                            Контакты
                        </Link>
                    </li>
                </ul>
                <div className={`header-top__right-wrapper header__right-wrapper ${shoMenu ? "header__right-wrapper-show" : ""}`}>
                    <div className="header-top__location">
                        <CiLocationOn />
                        <span>Санкт-Петербург</span>
                        <MdKeyboardArrowUp className={'header-top__location-svg'} />
                    </div>
                    <a href="tel:+88123098288" className="header-top__phone">
                        <IoIosPhonePortrait />
                        <span>8 812 309-82-88</span>
                    </a>
                    <Link to="#" className="header-top__cart header__cart">
                        <BsCart />
                        <span>В корзине (4 товара)</span>
                    </Link>
                    <div className="header-top__networking">
                        <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                        <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                            <SlSocialVkontakte />
                        </a>
                        <a href="https://ok.ru/" target="_blank" rel="noopener noreferrer">
                            <FaOdnoklassniki />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
