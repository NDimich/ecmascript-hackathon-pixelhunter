/**
 * accept node and removed all children
 * @param {Node} node
 */
const clearNode = function (node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
};

export default clearNode;

