import img1 from '../../assets/footer/like.png'
import img2 from '../../assets/footer/car.png'
import img3 from '../../assets/footer/Vector.png'
import img4 from '../../assets/footer/instagram.png'
import img5 from '../../assets/footer/facebbok.png'
import img6 from '../../assets/footer/wk.png'
import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container footer__wrapper">
                    <div className="footer__service">
                        <div className="footer__service-top-boxes">
                            <div>
                                <img src={img1} alt="Готовим вручную и c любовью img" />
                                <span>Готовим вручную и c любовью</span>
                            </div>
                            <div>
                                <img src={img2} alt="Доставим в день заказа img" />
                                <span>Доставим в день заказа</span>
                            </div>
                            <div>
                                <img src={img3} alt="100% миндальная мука и натуральные ингредиенты img" />
                                <span>100% миндальная мука и натуральные ингредиенты</span>
                            </div>
                        </div>
                        <p className='footer__service-text'>
                            {`© 2021 Макароншоп "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22`}
                        </p>
                    </div>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <h3 className='footer__list-title'>Информация</h3>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>O компании</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Гарантии вкуса и свежести</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Доставка и оплата</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Контакты</Link>
                        </li>
                    </ul>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <h3 className='footer__list-title'>Каталог</h3>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Каталог десертов</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Готовые наборы</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Собрать свой набор</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Наборы c печатью</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Свадебные предложения</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Акции</Link>
                        </li>
                    </ul>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <h3 className='footer__list-title'>ДЛЯ БИЗНЕСА</h3>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Корпоративные подарки</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Для юридических лиц</Link>
                        </li>
                        <li className='footer__item'>
                            <Link to="#" className='footer__list-link'>Оповикам</Link>
                        </li>
                    </ul>
                    <div className='footer__networking'>
                        <a className='footer__phone-call' href="tel:+7812309 82 88">+7 (812) 309 82 88</a>
                        <span>с 9:00 до 21:00</span>
                        <div>
                            <a className='footer__networking-link' href="">
                                <img src={img4} alt="Instagram img" />
                            </a>
                            <a className='footer__networking-link' href="">
                                <img src={img5} alt="facebook img" />
                            </a>
                            <a className='footer__networking-link' href="">
                                <img src={img6} alt="wk img" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
