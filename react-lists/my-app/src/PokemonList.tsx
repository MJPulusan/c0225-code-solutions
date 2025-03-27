import React from 'react';

export type Pokemon = {
  number: string;
  name: string;
};

interface Props {
  pokedex: Pokemon[];
}

export const PokemonList: React.FC<Props> = ({ pokedex }) => {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
