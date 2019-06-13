let test = require('tape')
let romanizer = require('./romanizer.js')

test('Tape is working', function(t) {
  t.equal(1,1, 'One should equal one')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(1)
  let output = 'I'
  t.equal(actual,output, '1 to output I')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(2)
  let output = 'II'
  t.equal(actual,output, '2 to output II')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(3)
  let output = 'III'
  t.equal(actual,output, '3 to output III')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(4)
  let output = 'IV'
  t.equal(actual,output, '4 to output IV')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(5)
  let output = 'V'
  t.equal(actual,output, '5 to output V')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(6)
  let output = 'VI'
  t.equal(actual,output, '6 to output VI')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(7)
  let output = 'VII'
  t.equal(actual,output, '7 to output VII')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(8)
  let output = 'VIII'
  t.equal(actual,output, '8 to output VIII')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(9)
  let output = 'IX'
  t.equal(actual,output, '9 to output IX')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(10)
  let output = 'X'
  t.equal(actual,output, '10 to output X')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(11)
  let output = 'XI'
  t.equal(actual,output, '11 to output XI')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(12)
  let output = 'XII'
  t.equal(actual,output, '12 to output XII')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(14)
  let output = 'XIV'
  t.equal(actual,output, '14 to output XIV')
  t.end()
})

test('Romanizer output', function(t) {
  let actual = romanizer(15)
  let output = 'XV'
  t.equal(actual,output, '15 to output XV')
  t.end()
})

