import React, { useState } from 'react';
import { Container } from '@mui/material';
import ListaPokemon from './ListaPokemon';
import NombrePokemon from './NombrePokemon';
import SpritePokemon from './SpritePokemon';
import DatosPokemon from './DatosPokemon';
import backgroundPokeball from './backgroundpokeball.png'; // Importa la imagen de fondo desde el mismo directorio

const ContainerPrincipal = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <Container 
      className="pokemon-font" 
      sx={{ 
        backgroundImage: `url(${backgroundPokeball})`, // Utiliza la imagen de fondo importada
        backgroundSize: 'cover',
        backgroundColor: '#fff', 
        width: '1000px', 
        height: '750px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative' 
      }}
    >
      <NombrePokemon selectedPokemon={selectedPokemon} />
      <SpritePokemon selectedPokemon={selectedPokemon} />
      <DatosPokemon selectedPokemon={selectedPokemon} />
      <ListaPokemon onPokemonClick={handlePokemonClick} />
    </Container>
  );
};

export default ContainerPrincipal;

