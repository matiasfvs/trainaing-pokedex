import React, { useEffect } from 'react';
import { Container,Grid } from '@mui/material';
import axios from 'axios';
import CardPokemon from '../common-components/card-component';

const homeViewer = () => {
  const [dataPokemon, setDataPokemon] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchPokemonList = () => {
    setLoading(true);
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setDataPokemon(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokemon list:', error);
        setLoading(false);
      });
  };

  // Retornar un objeto con las variables y funciones
  return {
    dataPokemon,
    loading,
    fetchPokemonList
  };
};

const Home = () => {
  const { dataPokemon, fetchPokemonList } = homeViewer();

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <Container>
    {/* Renderizar los datos de los pokemones */}
      {/* Renderizar los datos de los pokemones */}
      <Grid container spacing={2}>
        {dataPokemon.map(pokemon => (
          <Grid item key={pokemon.name} xs={12} lg={4}>
            <CardPokemon pokemonData={pokemon} />
          </Grid>
        ))}
      </Grid>
  </Container>
  );
};

export default Home;
