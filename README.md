# Closest

Similar to jQuery's `$.fn.closest` and `$.fn.parent`.
Finds the closest parent that matches a selector.

## API

### `closest(element, selector, checkSelf)`

* element - will check this elements parents
* selector - CSS selector to match parents
* checkSelf - check `element`.
  If falsey, will begin with `element.parentNode` and is synonymous to `$.fn.parent`.
  Otherwise, it's `$.fn.closest`.

Example:

    closest(document.body, 'html') === document.documentElement
    closest(document.body, 'body', true) === document.body
    closest(document.documentElement, 'html') == null

## License

WTFPL