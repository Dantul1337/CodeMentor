import Container from '../ui/Container';
import { advantages } from '../../data/advantages';

const Advantages = () => {
  return (
    <section className="advantages">
      <Container>
        <h2>Почему выбирают CodeMentor?</h2>

        <div className="advantages__grid">
          {advantages.map((item) => (
            <article key={item.title} className="advantage-card">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Advantages;