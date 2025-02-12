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
// getIndexes
function getIndexes(array) {
  return array.map((_, index) => index);
}
// addSuffixToAll
function addSuffixToAll(words, suffix) {
  return words.map((word) => word + suffix);
}
// getStudentNames
function getStudentNames(students) {
  return students.map((item) => item.name);
}
// filterOutNulls
function filterOutNulls(values) {
  return values.filter((item) => item != null);
}
function filterOutStrings(values) {
  return values.filter((item) => typeof item === 'number' || item === null);
}
function includesSeven(array) {
  return array.every((item) => typeof item === 'number');
}
function findIndex(array, value) {
  // Filter out the target number and find the smallest number in the remaining array
  const filteredArray = array.filter((item) => item !== value);
  return Math.min(...filteredArray); // Find and return the smallest number
}
