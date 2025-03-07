'use strict';
async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('Error:', error);
  }
}
async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const pokemonData = await response.json();
    console.log(pokemonData);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchUser();
fetchPokemon();
