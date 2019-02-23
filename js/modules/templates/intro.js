import createTemplate from "../utils/create-template";
import showTemplate from "../utils/show-template";
import greeting from "./greeting";

const intro = `
 <section id="intro" class="intro">
      <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      <button class="intro__top top" type="button">
        <img src="img/icon-top.svg" width="71" height="79" alt="Топ игроков">
      </button>
    </section>`;

const template = createTemplate(intro);

const asterisk = template.querySelector(`.asterisk`);

asterisk.addEventListener(`click`, () => {
  showTemplate(`#main`, greeting);
});

export default template;
