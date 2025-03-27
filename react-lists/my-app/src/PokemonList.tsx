import React from 'react';

// Define the Pokemon type
export type Pokemon = {
  number: string;
  name: string;
};

// Define the props interface
interface Props {
  pokedex: Pokemon[];
}

export const PokemonList: React.FC<Props> = ({ pokedex }) => {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>
          {pokemon.name}
          </li>
      ))}
    </ul>
  );
};

