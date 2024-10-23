import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-images">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} />
      </div>
      <h2>Name: {pokemon.name.toUpperCase()}</h2>
      <p>Type 1: {pokemon.types[0].type.name}</p>
      {pokemon.types[1] && <p>Type 2: {pokemon.types[1].type.name}</p>}
      <p>Base stats:</p>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;
