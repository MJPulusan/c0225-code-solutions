import React from 'react';

export type Pokemon = {
  number: string;
  name: string;
};

interface Props {
  pokedex: Pokemon[];
}

export const PokemonList = ({ pokedex }: Props) => {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
