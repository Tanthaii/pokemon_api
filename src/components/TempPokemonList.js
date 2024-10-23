import React from 'react';
import PokemonCard from './PokemonCard'; 
import './PokemonList.css';

function PokemonList({ pokemonData }) {
  if (!pokemonData || pokemonData.length === 0) {
    return <p>No Pokémon data available.</p>;
  }

  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
