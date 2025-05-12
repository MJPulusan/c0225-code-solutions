/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { Pokemon, PokemonList } from './PokemonList';

const initialPokedex: Pokemon[] = [
  { id: 1, name: 'Bulbasaur' },
  { id: 4, name: 'Charmander' },
  { id: 7, name: 'Squirtle' },
  { id: 25, name: 'Pikachu' },
  { id: 39, name: 'Jigglypuff' },
];

const addPokemon = { id: 40, name: 'Fakemon' };
const updatePokemon = { id: 25, name: 'Peek-a-boo' };
const removePokemon = { id: 4, name: 'Charmander' };

export function App() {
  const [pokedex, setPokedex] = useState(initialPokedex);

  function handleAdd(toAdd: Pokemon): void {
    return setPokedex((item) => item.concat(toAdd));
  }

  function handleUpdate(toUpdate: Pokemon): void {
    // setPokedex((item) => item.map(updatePokemon));
    const p = pokedex.map((item) =>
      item.id === toUpdate.id ? toUpdate : item
    );
    setPokedex(p);
  }

  function handleRemove(toRemove: number): void {
    const r = pokedex.filter((item) => item.id !== toRemove);
    setPokedex(r);
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={() => handleAdd(addPokemon)}>Add</button>
      <button onClick={() => handleUpdate(updatePokemon)}>Update</button>
      <button onClick={() => handleRemove(removePokemon.id)}>Remove</button>
    </div>
  );
}
