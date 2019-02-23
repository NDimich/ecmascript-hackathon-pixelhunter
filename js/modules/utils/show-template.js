import clearNode from "./clear-node";

/**
 * clear parent node given as first param and
 * append template given as second param
 * @param {string} selector
 * @param {Node} template
 */
const showTemplate = function (selector, template) {
  let mainDiv = document.querySelector(selector);
  clearNode(mainDiv);
  mainDiv.appendChild(template);
};

export default showTemplate;

