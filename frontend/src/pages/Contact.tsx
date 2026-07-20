import Container from "../components/ui/Container";

const Contact = () => {
    return (
        <section className="contact">
            <Container>

                <div className="contact__header">
                    <h1>Контакты</h1>

                    <p>
                        Есть вопросы? Свяжитесь со мной любым удобным способом
                        или оставьте заявку.
                    </p>
                </div>

                <div className="contact__content">

                    <div className="contact__info">

                        <div className="contact-card">
                            <h3>📞 Телефон</h3>
                            <p>+7 (999) 123-45-67</p>
                        </div>

                        <div className="contact-card">
                            <h3>📧 Email</h3>
                            <p>mentor@example.com</p>
                        </div>

                        <div className="contact-card">
                            <h3>💬 Telegram</h3>
                            <p>@codementor</p>
                        </div>

                        <div className="contact-card">
                            <h3>📍 Адрес</h3>
                            <p>Москва</p>
                        </div>

                    </div>

                    <div className="contact__form">

                        <h2>Оставить заявку</h2>

                        <input
                            type="text"
                            placeholder="Ваше имя"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                        />

                        <textarea
                            placeholder="Ваше сообщение"
                            rows={6}
                        />

                        <button className="button">
                            Отправить
                        </button>

                    </div>

                </div>

            </Container>
        </section>
    );
};

export default Contact;