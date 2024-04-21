import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

const DatosPokemon = ({ selectedPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (selectedPokemon) {
        try {
          const response = await axios.get(selectedPokemon.url);
          setPokemonData(response.data);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
        }
      }
    };

    fetchPokemonData();
  }, [selectedPokemon]);

  if (!pokemonData) {
    return null;
  }

  return (
    <Box sx={{ 
      width: '378px', 
      height: '200px', 
      position: 'absolute', 
      top: '500px', 
      left: '14px', 
      border: '1px solid #000', 
      padding: '16px',
      fontFamily: 'Pokemon Emerald, sans-serif', 
      fontSize: '20px', 
      fontWeight: 'bold', 
      color: '#333',
    }}>
      <div style={{ marginBottom: '8px' }}>Datos de {pokemonData.name}</div>
      {pokemonData.types && (
        <div style={{ marginBottom: '8px' }}>Tipo: {pokemonData.types.map(type => type.type.name).join(', ')}</div>
      )}
      <div style={{ marginBottom: '8px' }}>Altura: {pokemonData.height}</div>
      <div style={{ marginBottom: '8px' }}>Peso: {pokemonData.weight}</div>
      {pokemonData.abilities && (
        <div style={{ marginBottom: '8px' }}>Habilidades: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</div>
      )}
      <div style={{ marginBottom: '8px' }}>Experiencia base: {pokemonData.base_experience}</div>
      <div style={{ marginBottom: '8px' }}>Habitat: {pokemonData.habitat ? pokemonData.habitat.name : 'Desconocido'}</div>
    </Box>
  );
};

export default DatosPokemon;
