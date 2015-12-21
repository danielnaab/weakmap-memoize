'use strict';


module.exports = function memoize(weakMap, fn) {
    return function(arg) {
        if (!weakMap.has(arg)) {
            weakMap.set(arg, fn(arg))
        }
        return weakMap.get(arg)
    }
}
