import Wrapper from './Layouts/Wrapper';

export default function Main() {
  return (
    <main>
      <Wrapper>
        <div className="main">
          <h1 className="main-head">
            Заголовок c уникальным торговым предложение по системе 4U
          </h1>
          <div className="main-small">
            Описания предлжения компании. Сайт рыбатекст поможет дизайнеру,
            верстальщику, вебмастеру сгенерировать несколько абзацев более.
          </div>
          <button className="btn main-btn">
            <span>Подробнее</span>
          </button>
        </div>
      </Wrapper>
    </main>
  );
}