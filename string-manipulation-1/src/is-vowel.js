'use strict';
/* exported isVowel */
function isVowel(character) {
  return 'aeiouAEIOU'.includes(character);
}
let input;
input = 'L';
console.log(isVowel(input));
input = 'a';
console.log(isVowel(input));
input = 'E';
console.log(isVowel(input));
input = 'z';
console.log(isVowel(input));
