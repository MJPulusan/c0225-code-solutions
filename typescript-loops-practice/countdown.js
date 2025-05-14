'use strict';
/* exported countdown */
// countdown
function countdown(num) {
  const result = [];
  for (let i = num; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
console.log(countdown(10));
// sumAll
function sumAll(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumAll);
// getIndexes
function getIndexes(array) {
  return array.map((_, index) => index);
}
console.log(getIndexes);
// addSuffixToAll
function addSuffixToAll(words, suffix) {
  return words.map((word) => word + suffix);
}
console.log(addSuffixToAll);
// getStudentNames
function getStudentNames(students) {
  return students.map((item) => item.name);
}
console.log(getStudentNames);
// filterOutNulls
function filterOutNulls(values) {
  return values.filter((item) => item != null);
}
console.log(filterOutNulls);
// filterOutStrings
function filterOutStrings(values) {
  return values.filter((item) => typeof item === 'number' || item === null);
}
console.log(filterOutStrings);
// includesSeven
function includesSeven(values) {
  for (const value of values) {
    if (value === 7) {
      return true;
    }
  }
  return false;
}
console.log(includesSeven);
// findIndex
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex);
// oddOrEven
function oddOrEven(numbers) {
  return numbers.map((num) => (num % 2 === 0 ? 'even' : 'odd'));
}
console.log(oddOrEven);
