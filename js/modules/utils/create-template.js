/**
 * Creates a div with fragment of HTML elements, using a raw html string.
 * Wrapping DIV is necessary to keep the fragment immutable after inserting in DOM tree.
 * @param {string} template
 * @return {Node}
 */
const createTemplate = function (template) {
  const div = document.createElement(`div`);
  div.appendChild(document.createRange().createContextualFragment(template));
  return div;
};

export default createTemplate;
