import Input from './Elems/Input';

export default function Contacts() {
  return (
    <section className="contact">
      <div className="wrapper">
        <div className="contact-wrapper">
          <h2 className="contact-title">Остались вопросы?</h2>
          <div className="contact-description">
            Оставьте номер телефона, и мы перезвоним вам
          </div>
          <form action="../mailer.smart.php" className="contact-form">
            <Input type="text" placeholder="Ваше имя" />
            <Input type="tel" placeholder="Телефон" />
            <Input type="tel" placeholder="E-mail" />
            <button className="btn contact-btn">
              <span>Позвоните мне</span>
            </button>
          </form>
          <div className="contact-personal">
            Я даю своё <a href="#">согласие</a> на обработку моих персональных
            данных.
          </div>
        </div>
      </div>
    </section>
  );
}