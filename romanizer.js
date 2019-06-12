function romanizer(number) {
  result = ''
  while (number > 0) {
    result += 'I'
    number -= 1
  }
  return result
}

module.exports = romanizer