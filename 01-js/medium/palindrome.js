/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let reversedStrArray = str.split('').reverse();
  let reversedStr = ''
  for (char of reversedStrArray){
    let unicode = char.charCodeAt(0)
    if (unicode >= 97 && unicode <= 122){
      reversedStr += char
    }
  }

  let processedStr = ''
  for (char of str){
    let unicode = char.charCodeAt(0)
    if (unicode >= 97 && unicode <= 122){
      processedStr += char
    }
  }

  if (processedStr === reversedStr){
    return true
  }

  return false;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
