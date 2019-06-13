let values = [
  {
    arabic: 10,
    roman: 'X'
  },
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
  },
  {
    arabic: 1,
    roman: 'I'
  }
]

function romanizer(num) {
  remaining = num
  result = ''

  values.forEach(function(value) {
    while (remaining >= value.arabic) {
      result += value.roman
      remaining -= value.arabic
    }
  })
  return result
}

module.exports = romanizer