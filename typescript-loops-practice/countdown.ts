/* exported countdown */

// countdown
function countdown(num: number): number[] {
  const result: number[] = [];
  for (let i = num; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
console.log(countdown(10));

// sumAll
function sumAll(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sumAll);

// getIndexes
function getIndexes(array: string[]): number[] {
  return array.map((_, index) => index);
}
console.log(getIndexes);

// addSuffixToAll
function addSuffixToAll(words: string[], suffix: string): string[] {
  return words.map((word) => word + suffix);
}
console.log(addSuffixToAll);

// getStudentNames
function getStudentNames(students: { name: string }[]): string[] {
  return students.map((item) => item.name);
}
console.log(getStudentNames);

// filterOutNulls
function filterOutNulls(values: (string | null)[]): string[] {
  return values.filter((item) => item != null) as string[];
}
console.log(filterOutNulls);

function filterOutStrings(values: (number | string)[]): number[] {
  return values.filter(
    (item) => typeof item === 'number' || item === null
  ) as number[];
}
console.log(filterOutStrings);

function includesSeven(values: number[]): boolean {
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
