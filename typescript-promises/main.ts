import { takeAChance } from './take-a-chance.js';

const yourName = takeAChance('Michael');

yourName
  .then((message) => {
    console.log(message);
  })

  .catch((error) => {
    console.log(error.message);
  });
