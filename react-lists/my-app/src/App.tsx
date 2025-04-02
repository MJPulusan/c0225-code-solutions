import React from 'react';
import { PokemonList, Pokemon } from './PokemonList';
import './App.css';
import './index.css';

const pokedex: Pokemon[] = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

const App = () => {
  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonList pokedex={pokedex} />
    </div>
  );
};
export default App;
