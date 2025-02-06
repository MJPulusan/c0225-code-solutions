const heroes: string[] = ['batman', 'ironman', 'wolverine', 'deadpool'];
Math.random();
const randomNumber: number = heroes.length * Math.random();
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library: any[] = [
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

// const fullName = 'Michael John Pulusan';
// split(' ');

// const firstAndLastName = fullName;
// console.log(str.split());
