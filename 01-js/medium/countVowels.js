/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let characters = str.split('')
    let vowelCount = 0
    for (char of characters){
      char = char.toLowerCase()
      switch (char) {
        case 'a':
          vowelCount++
          break;
        case 'e':
          vowelCount++
          break;
        case 'i':
          vowelCount++
          break;
        case 'o':
          vowelCount++
          break;
        case 'u':
          vowelCount++
          break;
      
        default:
          break;
      }
    }
    return vowelCount
}

module.exports = countVowels;