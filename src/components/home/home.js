import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import CardPokemon from '../common-components/card-component';
import SearchBar from '../common-components/search-component'; // Aqui se importa el componentillo SearchBar

const homeViewer = () => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemonList = () => {
    setLoading(true);
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
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
  const [filteredData, setFilteredData] = useState([]); //Se fija esta constante con las variables de estado filteredData y setFilteredData especificadas en el search-component.js

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = dataPokemon.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <Container>
      {/* Renderizar los datos de los pokemones */}
      <SearchBar onSearch={handleSearch} /> {/* Acá se integra el componente de búsqueda*/}
      <Grid container spacing={2}>
        {(filteredData.length > 0 ? filteredData : dataPokemon).map(pokemon => (
          <Grid item key={pokemon.name} xs={12} lg={4}>
            <CardPokemon pokemonData={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
