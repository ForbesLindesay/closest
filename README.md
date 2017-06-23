# Closest

Finds the closest parent that matches a selector. Like `jQuery.fn.closest`


## Installation

    $ npm install closest

## API

### `closest(element, selector, checkSelf)`

* `element` - element to search from
* `selector` - CSS selector to match parents
* `checkSelf`
  * If falsey (default) it starts with the parent like `$(element).closest(selector)`
  * If truthy it starts with itself so would return `element` if it matches `selector`

Example:

```javascript
var closest = require('closest');

closest(document.body, 'html') === document.documentElement
closest(document.body, 'body', true) === document.body
closest(document.documentElement, 'html') == null
```

## License

  MIT
