'use strict';
const heroes = ['batman', 'ironman', 'wolverine', 'deadpool'];
Math.random();
const randomNumber = heroes.length * Math.random();
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
const library = [
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmandhip',
    author: 'Robert C. Martin',
  },
  {
    title: 'Code Complete: A Practical Handbook of Software Construction',
    author: 'Steve McConnell',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hun, David Thomas',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
{
  const js = {
    title: 'Javascript for Impatient Programmers',
    author: 'DragEvent. Axel Rauschmayer',
  };
  const css = {
    title: 'CSS Secrets',
    author: 'Lea Verou',
  };
  library.push(js);
  library.unshift(css);
  library.splice(1, 1);
  console.log('library:', library);
}
// String Methods
const fullName = 'Michael John Pulusan';
const firstNameAndLastName = fullName.split(' ');
console.log(firstNameAndLastName);
const firstName = firstNameAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
// Object Methods
const employee = {
  name: 'James',
  age: 32,
  position: 'VP',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
