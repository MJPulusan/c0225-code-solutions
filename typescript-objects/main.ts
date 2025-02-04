interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  age: 25,
};

const fullName: string = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'Moisture Farmer';
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);
console.log('type of student:', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: string;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}
const pet: Pet = {
  name: 'jojo',
  kind: 'hairy',
};

delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
