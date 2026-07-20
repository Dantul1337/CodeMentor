import Container from "../ui/Container";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__content">

                    <div className="footer__brand">
                        <h2>CodeMentor</h2>

                        <p>
                            Подготовка к ЕГЭ, обучение программированию
                            и современным веб-технологиям.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h3>Навигация</h3>

                        <Link to="/">Главная</Link>
                        <Link to="/courses">Курсы</Link>
                        <Link to="/about">Обо мне</Link>
                        <Link to="/contact">Контакты</Link>
                    </div>

                    <div className="footer__contacts">
                        <h3>Контакты</h3>

                        <p>📧 mentor@example.com</p>
                        <p>📱 +7 (999) 123-45-67</p>
                        <p>📍 Онлайн-обучение</p>
                        <p>Работаю с учениками по всей России</p>
                    </div>

                </div>

                <div className="footer__bottom">
                    © 2026 CodeMentor. Все права защищены.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;