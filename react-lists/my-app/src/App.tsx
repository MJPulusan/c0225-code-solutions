import React from 'react';
import { PokemonList } from './PokemonList';
import { Pokemon } from './PokemonList'; // Pokemon type
import './index.css';

const pokedex: Pokemon[] = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonList pokedex={pokedex} />
    </div>
  );
};

export default App;
