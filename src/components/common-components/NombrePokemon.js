import React from 'react';
import { Box } from '@mui/material';
import '../../styles/styles.css'; // Importa el archivo de estilos desde la carpeta src/styles

const NombrePokemon = ({ selectedPokemon }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box sx={{ 
      width: '418px', 
      height: '75px', 
      position: 'absolute', 
      top: '14px', 
      left: '14px',
      fontFamily: 'Pokemon Emerald, sans-serif', 
      fontSize: '53px', 
      textAlign: 'center', 
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center', 
    }}>
      <div className="pokemon-name">{selectedPokemon ? capitalizeFirstLetter(selectedPokemon.name) : 'Nombre del Pokémon'}</div>
    </Box>
  );
};

export default NombrePokemon;
