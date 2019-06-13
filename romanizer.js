let values = [
  {
    arabic: 9,
    roman: 'IX'
  },
  {
    arabic: 5,
    roman: 'V'
  },
  {
    arabic: 4,
    roman: 'IV'
  }
]

function romanizer(num) {
  remaining = num
  result = ''

  values.forEach(function(value) {
    if (remaining >= value.arabic) {
      result += value.roman
      remaining -= value.arabic
    }
  })
  while (remaining > 0) {
    result += 'I'
    remaining -= 1
  }
  return result
}

module.exports = romanizer