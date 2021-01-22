import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <Logo className="footer-logo" />
        <div className="footer-company">
          <span>© 2020 XXXcompany. Все права защищены.</span>
        </div>
        <a href="tel:888" className="footer-phone"></a>
        <div className="footer-websurfer">
          <span className="footer-websurfer_build">Сделано</span>
          <a href="#">Ваше имя</a>
        </div>
        <div className="footer-phonelink">
          <a href="tel:888">+7(962)556-1234</a>
        </div>
      </div>
    </footer>
  );
}