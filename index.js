var matches = require('matches-selector')
var types = 'HTMLDocument|ShadowRoot'

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && !parent.toString().match(types)) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}
