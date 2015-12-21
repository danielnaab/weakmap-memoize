# weakmap-memoize

This is a very lightweight [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)-based memoization wrapper that allows you to
use your own preferred `WeakMap` implementation, of which there are
[many](https://www.npmjs.com/search?q=weakmap).

NOTE: You are constrained in that only the first argument to your function will
used to do the memoization, and it must be an object.

Usage:

    var memoize = require('weakmap-memoize')
    var WeakMapShim = require('weakmap-shim')

    var times = 0
    var myFunction = memoize(WeakMapShim(), function (obj) {
        times++
        return obj.num + 1
    })

    var one = {num: 1}
    var two = {num: 2}
    assert.equal(myFunction(one), 2)
    assert.equal(times, 1)
    assert.equal(myFunction(one), 2)
    assert.equal(times, 1)
    assert.equal(myFunction(two), 3)
    assert.equal(times, 2)
    assert.equal(myFunction(two), 3)
    assert.equal(times, 2)
