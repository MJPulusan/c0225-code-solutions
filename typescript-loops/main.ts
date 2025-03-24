/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

// *************************************************

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2; // repeating increment currentNumber++;
  }
  return evenNumbers;
}

// ***************************************************

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';

  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

// ***************************************************

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

// ***************************************************

function doubleAll(numbers: number[]): number[] {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

// const arr = [3, 210, 5];
// doubleAll(arr);

// *****************************************************

function sumArray(numbers: number[]): number {
  let sum = 0;

  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

//  ******************************************************

function reverseString(str: string): string {
  let reversed = '';

  for (const letter of str) {
    reversed = letter + reversed;
  }
  return reversed;
}

// ********************************************************

// const person = {
//   Name: 'Mike',
//   age: 50,
// };

function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];

  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

// *********************************************************

function getValues(obj: Record<string, unknown>): any[] {
  const values = [];

  for (const value in obj) {
    values.push(obj[value]);
  }
  return values;
}
