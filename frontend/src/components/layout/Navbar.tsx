import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Container from '../ui/Container';
import Button from '../ui/Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__content">
          <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
            CodeMentor
          </NavLink>

          <div className={`navbar__links ${open ? 'active' : ''}`}>
            <NavLink to="/" onClick={closeMenu}>
              Главная
            </NavLink>

            <NavLink to="/courses" onClick={closeMenu}>
              Курсы
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              О нас
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Контакты
            </NavLink>

            <div className="navbar__mobileButton">
              <Button
                onClick={() => {
                  closeMenu();
                  navigate('/courses');
                }}>
                Записаться
              </Button>
            </div>
          </div>

          <div className="navbar__desktopButton">
            <Button onClick={() => navigate('/courses')}>Записаться</Button>
          </div>

          <button className={`navbar__burger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
