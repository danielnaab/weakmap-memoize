'use strict';


module.exports = function memoize(weakMap, fn) {
    return function () {
        if (!weakMap.has(arguments[0])) {
            weakMap.set(arguments[0], fn.apply(null, arguments))
        }
        return weakMap.get(arguments[0])
    }
}
