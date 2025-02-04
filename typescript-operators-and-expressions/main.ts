const width: number = 12;
const height: number = 24;
const area: number = width * height;

console.log('value of area:', area);
console.log('type of area:', typeof area);

const bill: number = 800;
const payment: number = 1000;
const change: number = payment - bill;

console.log('value of change:', change);
console.log('type of change:', typeof change);

const quizzes: number = 85;
const midterm: number = 80;
const final: number = 95;
const grade: number = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

const firstName: string = 'Michael John';
const lastName: string = 'Pulusan';
const fullName: string = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const headCount: number = 10;
const isSparta: boolean = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let motto: string = fullName;
motto += 'is the GOAT';

console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);
