import { NavLink } from 'react-router-dom';

import Container from '../ui/Container';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__content">
          <NavLink to="/" className="navbar__logo">
            CodeMentor
          </NavLink>

          <div className="navbar__links">
            <NavLink to="/">Главная</NavLink>

            <NavLink to="/courses">Курсы</NavLink>

            <NavLink to="/about">Обо мне</NavLink>

            <NavLink to="/contact">Контакты</NavLink>
          </div>

          <Button>Записаться</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
