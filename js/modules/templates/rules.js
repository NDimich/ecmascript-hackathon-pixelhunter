import createTemplate from "../utils/create-template";
import showTemplate from "../utils/show-template";
import goBack from "../utils/go-back";
import game1 from "./game-1";



const rules = ` <header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;
// create template
const template = createTemplate(rules);

goBack(template);


const go = template.querySelector(`button[type = 'submit']`);
const input = template.querySelector(`input[type = 'text']`);

// check if user typed name and name's length in input field
input.addEventListener(`keyup`, () => {
  if (input.value !== `` && input.value.length >= 3) {
    go.removeAttribute(`disabled`);
    // add moving to the next screen
    go.addEventListener(`click`, (e) => {
      e.preventDefault();
      input.value = ``;
      go.setAttribute(`disabled`, `true`);
      showTemplate(`#main`, game1);
    });
  } else if (!go.hasAttribute(`disabled`)) {
    go.setAttribute(`disabled`, `true`);
  }
});


export default template;
