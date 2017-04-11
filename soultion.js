'use strict'

const checkPalindrom = function (str) {
  const newStr = str.split('').reverse().join('')
  return str === newStr
}
const findSumOfPalindrom = function () {
  let result = 0
  const millionbase10 = 1000000
  for (let i = 0; i < millionbase10; i++) {
    if (checkPalindrom(i)) {
      console.log('found palindrom: ' + i)
      result = result + i
    }
    console.log('Sum: ' + result)
  }
}

findSumOfPalindrom()
