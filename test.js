'use strict';

var test = require('tape'),
    WeakMapShim = require('weakmap-shim')

var memoize = require('./index')


test('simple test', function (assert) {
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

    myFunction = memoize(WeakMapShim(), function (obj1, obj2) {
        return obj1.num + obj2.num
    })

    assert.equal(myFunction(one, two), 3)

    assert.end()
})
