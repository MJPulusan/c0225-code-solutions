function convertMinutesToSeconds(minutes: number): number {
  const min: number = 60 * minutes;
  return min;
}
const result: number = convertMinutesToSeconds(5); // 300
console.log('convertMinutesToSeconds value:', result);

function greet(name: string): string {
  const name1: string = name;
  return name1;
}
const greeting: string = greet('Mike');
console.log('Greetings value: Hey', greeting + '!');

function getArea(width: number, height: number): number {
  const sumArea: number = width * height;
  return sumArea;
}

const resArea: number = getArea(17, 42); // 714
console.log('getArea value:', resArea);

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => person.firstName;
console.log(
  'firstName value:',
  getFirstName({ firstName: 'Michael', lastName: 'Pulusan' })
); // Michael

const getLastElement = (array: string[]): string => array[array.length - 1];
console.log(
  'getLastElement value:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
); // accessories

function callOtherFunction(otherFunction: Function, params: number): string {
  return otherFunction(params);
}

const otherFunctionResult: string = callOtherFunction(
  convertMinutesToSeconds,
  5
);
console.log('value of callOtherFunction:', otherFunctionResult); // 300
