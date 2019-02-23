import showTemplate from "./show-template";
import greeting from "../templates/greeting";

/**
 * return user on greeting screen when clicked back button
 * @param {Node} template
 */
const goBack = function (template) {
  const back = template.querySelector(`.back`);

  back.addEventListener(`click`, () => {
    showTemplate(`#main`, greeting);
  });
};


export default goBack;
