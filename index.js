var matches = require('matches-selector')

module.exports = function closest(element, selector, checkYoSelf) {
  if (checkYoSelf && matches(element, selector))
    return element;

  var parent = element.parentNode

  if (element === document || parent === document) return;

  if (matches(parent, selector)) return parent;

  return closest(parent, selector)
}