import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './components/TempPokemonList';



function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [detailedPokemon, setDetailedPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const promises = pokemonData.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      setDetailedPokemon(results);
    };

    if (pokemonData.length > 0) {
      fetchDetails();
    }
  }, [pokemonData]);

  return (
    <div className="App">
      <h1>API Pokemon</h1>
      <button onClick={fetchPokemon}>Get pokemon dex</button>
      <PokemonList pokemonData={detailedPokemon} />
    </div>
  );
}

export default App;

