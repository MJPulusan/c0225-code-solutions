/* exported isVowel */
function isVowel(character: string): boolean {
  return 'aeiouAEIOU'.includes(character);
}

let input: string;

input = 'L';
console.log(isVowel(input));

input = 'a';
console.log(isVowel(input));

input = 'E';
console.log(isVowel(input));

input = 'z';
console.log(isVowel(input));
