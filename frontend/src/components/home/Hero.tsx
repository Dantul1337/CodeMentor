import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

import heroImage1 from '../../assets/images/hero.jpg';
import heroImage2 from '../../assets/images/hero2.jpg';

const SLIDES = [
  {
    id: 1,
    image: heroImage1,
    name: 'Даня',
    role: 'Основатель & FullStack developer',
  },
  {
    id: 2,
    image: heroImage2,
    name: 'Яна',
    role: 'Преподаватель Frontend направления',
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

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
            <div className="hero__slider">
              <div className="hero__slides-wrapper">
                {SLIDES.map((slide, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <div key={slide.id} className={`hero__card ${isActive ? 'hero__card--active' : ''}`}>
                      <div className="hero__image">
                        <img src={slide.image} alt={slide.name} />
                      </div>

                      <div className="hero__info">
                        <h3 className="hero__name">{slide.name}</h3>
                        <p className="hero__role">{slide.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="hero__slider-controls">
                <button type="button" className="hero__slider-btn" onClick={handlePrev} aria-label="Предыдущий слайд">
                  ‹
                </button>

                <div className="hero__dots">
                  {SLIDES.map((_, index) => (
                    <span
                      key={index}
                      className={`hero__dot ${index === currentIndex ? 'hero__dot--active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <button type="button" className="hero__slider-btn" onClick={handleNext} aria-label="Следующий слайд">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
