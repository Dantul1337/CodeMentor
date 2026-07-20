import Container from '../components/ui/Container';
import heroImage from '../assets/images/hero.jpg';

const About = () => {
  return (
    <section className="about">
      <Container>
        <div className="about__header">
          <h1>Обо мне</h1>

          <p>Меня зовут Евгений. Я занимаюсь подготовкой школьников к ЕГЭ по информатике и обучаю современному программированию.</p>
        </div>

        <div className="about__content">
          <div className="about__image">
            <img src={heroImage} alt="Преподаватель" />
          </div>

          <div className="about__text">
            <h2>Почему ученики выбирают CodeMentor?</h2>

            <p>На занятиях мы не просто решаем задачи, а учимся понимать алгоритмы и применять знания на практике.</p>

            <ul>
              <li>✅ Индивидуальная программа обучения</li>
              <li>✅ Подготовка к ЕГЭ любого уровня</li>
              <li>✅ Практика программирования</li>
              <li>✅ Современные технологии JavaScript и React</li>
            </ul>
          </div>
        </div>
        <section className="about__stats">
          <div className="stat-card">
            <h2>200+</h2>
            <p>Учеников обучено</p>
          </div>

          <div className="stat-card">
            <h2>98%</h2>
            <p>Успешно сдают ЕГЭ</p>
          </div>

          <div className="stat-card">
            <h2>5+</h2>
            <p>Лет преподавания</p>
          </div>

          <div className="stat-card">
            <h2>1000+</h2>
            <p>Часов практики</p>
          </div>
        </section>
        <section className="about__cta">
          <h2>Готовы начать обучение?</h2>

          <p>Запишитесь на первое занятие и получите индивидуальный план обучения.</p>

          <button className="button">Записаться</button>
        </section>
      </Container>
    </section>
  );
};

export default About;
