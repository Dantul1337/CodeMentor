import Button from '../ui/Button';
import Container from '../ui/Container';

import { useNavigate } from 'react-router-dom';

import heroImage from '../../assets/images/hero.jpg';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <div className="hero__left">
            <span className="hero__badge">🚀 Подготовка к ЕГЭ и программированию</span>

            <h1>Стань сильнее в информатике вместе с CodeMentor</h1>

            <p>Индивидуальные занятия по информатике, подготовка к ЕГЭ, обучение JavaScript, Python и веб-разработке.</p>
            <div className="hero__buttons">
              <Button onClick={() => navigate('/courses')}>Записаться</Button>

              <Button variant="secondary" onClick={() => navigate('/courses')}>
                Курсы
              </Button>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__image">
              <img src={heroImage} alt="CodeMentor" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
