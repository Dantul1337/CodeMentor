import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import mentor1 from '../assets/images/hero.jpg';
import mentor2 from '../assets/images/hero2.jpg';
import { useNavigate } from 'react-router-dom';

const TEAM = [
  {
    id: 1,
    name: 'Даня',
    role: 'Основатель & FullStack developer',
    description: 'Специализируется на подготовке к ЕГЭ по информатике, Python, алгоритмам, а также Fullstack разработке',
    image: mentor1,
  },
  {
    id: 2,
    name: 'Яна',
    role: 'Преподаватель Frontend направления',
    description: 'Обучает frontend-разработке, JavaScript, React и созданию веб-проектов.',
    image: mentor2,
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="about">
      <Container>
        <div className="about__header">
          <h1>О нас</h1>
          <p>
            CodeMentor — это команда преподавателей-практиков. Мы помогаем школьникам сдавать ЕГЭ на высокие баллы и осваивать современные
            технологии программирования.
          </p>
        </div>

        <div className="about__team">
          {TEAM.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card__image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-card__content">
                <h3>{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about__content">
          <div className="about__text">
            <h2>Почему выбирают школу CodeMentor?</h2>
            <p>Наш подход основан на глубоком понимании процессов, а не на простом заучивании шаблонов.</p>

            <ul>
              <li>✅ Индивидуальные треки под уровень каждого ученика</li>
              <li>✅ Подготовка к ЕГЭ и ОГЭ от экспертов</li>
              <li>✅ Практика написания реального кода на Python, JS и C++</li>
              <li>✅ Поддержка и разбор домашних заданий 24/7</li>
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
            <p>Лет опыта</p>
          </div>

          <div className="stat-card">
            <h2>1000+</h2>
            <p>Часов практики</p>
          </div>
        </section>

        <section className="about__cta">
          <h2>Готовы начать обучение?</h2>
          <p>Запишитесь на вводное занятие и получите ваш персональный план подготовки.</p>
          <Button
            onClick={() => {
              navigate('/courses');
            }}>
            Записаться
          </Button>
        </section>
      </Container>
    </section>
  );
};

export default About;
