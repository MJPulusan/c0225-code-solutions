'use strict';
const books = [
  {
    isbn: '9780380731398',
    title: "Blue's Hanging",
    author: 'Yamanaka',
  },
  {
    isbn: '9780878934454',
    title: 'Ecology Second Edition',
    author: 'Michael L. Cain, William D. Bowman, Sally D. Hacker',
  },
  {
    isbn: '9780073402659',
    title: 'Chemistry The Molecular Nature of Matter and Change',
    author: 'Silberg',
  },
];
const json = JSON.stringify(books);
console.log(json, typeof json);
// Student
const studentJson = '{"id": 123456789, "name": "Mike P."}';
console.log(studentJson, typeof studentJson);
const studentObj = JSON.parse(studentJson);
console.log(studentObj, typeof studentObj);
