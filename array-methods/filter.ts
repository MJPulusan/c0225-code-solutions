const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

console.log('Even numbers');
const isEven = numbers.filter((numbers) => numbers % 2 === 0);
console.log(isEven);

console.log('No D');
const noD = names.filter(
  (names) => !names.includes('D') && !names.includes('d')
);
console.log(noD);
