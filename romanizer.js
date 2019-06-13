function romanizer(num) {
  remaining = num
  result = ''
  if (remaining >= 5) {
    result += 'V'
    remaining -= 5
  } else if (num === 4) {
    return 'IV'
  }

  while (remaining > 0) {
    result += 'I'
    remaining -= 1
  }
  return result
}

module.exports = romanizer