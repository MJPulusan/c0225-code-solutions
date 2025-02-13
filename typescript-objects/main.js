'use strict';
const student = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 25,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
student.previousOccupation = 'Moisture Farmer';
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('type of student:', typeof student);
const vehicle = {
  make: 'SoroSuub',
  model: 'Landspeeder',
  year: '20BBY',
};
vehicle['color'] = 'white';
console.log('value of vehicle["color"]:', vehicle['color']);
vehicle['isConvertible'] = true;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
const pet = {
  name: 'jojo',
  kind: 'hairy',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
