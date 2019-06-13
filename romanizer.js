function romanizer(num) {
  result = ''
  if (num === 4) {
    return 'IV'
  }
  while (num > 0) {
    result += 'I'
    num -= 1
  }
  return result
}

module.exports = romanizer