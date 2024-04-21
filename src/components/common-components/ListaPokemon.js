import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

const ListaPokemon = ({ onPokemonClick }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        setDataPokemon(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokemon list:', error);
      });
  };

  const handleSearch = (searchTerm) => {
    const filtered = dataPokemon.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleClick = (pokemon) => {
    console.log('Pokémon seleccionado:', pokemon);
    onPokemonClick(pokemon);
  };

  return (
    <Box sx={{ 
      width: '461px', 
      height: '637px', 
      position: 'absolute', 
      top: '16px', 
      right: '0px', 
      marginRight: '20px', 
      fontFamily: 'Pokemon Emerald, sans-serif', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    }}>
      <h1>Lista de Pokémon</h1>
      <Box sx={{ overflowY: 'scroll', height: '550px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {(filteredData.length > 0 ? filteredData : dataPokemon).map(pokemon => (
            <li key={pokemon.name} style={{ marginBottom: '8px', cursor: 'pointer' }} onClick={() => handleClick(pokemon)}>
              {capitalize(pokemon.name)} {}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default ListaPokemon;
