import React from 'react';
import { Box } from '@mui/material';

const SpritePokemon = ({ selectedPokemon }) => {
  // Verificando si selectedPokemon es null o undefined
  if (!selectedPokemon) {
    return null; // Retorna null si no hay ningún Pokémon seleccionado
  }

  // Extrayendo el ID del URL del Pokemon
  const pokemonId = selectedPokemon.url.split('/').slice(-2, -1)[0];

  console.log(selectedPokemon); // Verificar que el objeto selectedPokemon tenga los datos correctos
  console.log(pokemonId); // Verificar que se está extrayendo el ID correctamente

  return (
    <Box sx={{ width: '378px', height: '381px', position: 'absolute', top: '95px', left: '14px', border: '1px solid #000' }}>
      {/* Sprite del Pokémon */}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt="Sprite del Pokémon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </Box>
  );
};

export default SpritePokemon;


