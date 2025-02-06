'use strict';
function convertMinutesToSeconds(minutes) {
  const min = 60 * minutes;
  return min;
}
const result = convertMinutesToSeconds(5); // 300
console.log('convertMinutesToSeconds value:', result);
function greet(name) {
  const name1 = name;
  return name1;
}
const greeting = greet('Mike');
console.log('Greetings value: Hey', greeting + '!');
function getArea(width, height) {
  const sumArea = width * height;
  return sumArea;
}
const resArea = getArea(17, 42); // 714
console.log('getArea value:', resArea);
const getFirstName = (person) => person.firstName;
console.log(
  'firstName value:',
  getFirstName({ firstName: 'Michael', lastName: 'Pulusan' })
); // Michael
const getLastElement = (array) => array[array.length - 1];
console.log(
  'getLastElement value:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
); // accessories
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const otherFunctionResult = callOtherFunction(convertMinutesToSeconds, 5);
console.log('value of callOtherFunction:', otherFunctionResult); // 300
