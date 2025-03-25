interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchUser(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const user = (await response.json()) as User;
    console.log(user);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pokemonData = (await response.json()) as Pokemon;
    console.log(pokemonData);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUser();
fetchPokemon();
