"use strict";
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
function filterOutStrings(values) {
    return values.filter((item) => typeof item === 'number' || item === null);
}
console.log(filterOutStrings);
function includesSeven(values) {
    for (const value of values) {
        if (value === 7) {
            return true;
        }
    }
    return false;
}
// console.log(includesSeven([7, 77, 87, 88, 67, 85, 44]));
// console.log(includesSeven([87, 88, 67, 85, 44]));
// function findIndex(array: number[], value: number): number {
//   // Filter out the target number and find the smallest number in the remaining array
//   const filteredArray = array.filter((item) => item !== value);
//   return Math.min(...filteredArray);
// }
// console.log(findIndex);
// function oddOrEven(numbers: number[]): string[] {
//   return numbers.map((num) => (num % 2 === 0 ? 'even' : 'odd'));
// }
// console.log(oddOrEven);
