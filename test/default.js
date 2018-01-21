var test = require('tape')
var minijack = require('../index.js')

test('single argument', function (t) {
  t.plan(1)
  const artifact = 'yo'
  t.equal(artifact, minijack(artifact))
})

test('single argument (function)', function (t) {
  t.plan(1)
  const artifact = () => {}
  t.equal(artifact, minijack(artifact))
})

test('single argument + function', function (t) {
  t.plan(2)
  const artifact = 'yo'
  t.equal(artifact, minijack(artifact, (value) => {
    t.equal(artifact, value)
  }))
})

test('multiple arguments', function (t) {
  t.plan(1)
  const artifact = 'yo'
  t.equal(artifact, minijack(artifact, 'extra'))
})

test('multiple arguments + function', function (t) {
  t.plan(4)
  const artifact = 'yo'
  const extra = 'extra'
  t.equal(artifact, minijack(artifact, extra, (value, label, last) => {
    t.equal(artifact, value)
    t.equal(extra, label)
    t.equal(undefined, last)
  }))
})
