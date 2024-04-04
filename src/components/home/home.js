
import React,{useEffect, useState} from 'react'
import {Container} from '@mui/material'
import axios from 'axios'

const homeViewer = () => {
  const [dataPokemon, setDataPokemon] = useState();
  const [loading, setLoading] = useState(false);

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
 const {dataPokemon,fetchPokemonList} = homeViewer()

 useEffect(() => {
  fetchPokemonList()
 },[])

  return(
  <Container>
    {JSON.stringify(dataPokemon)}
  </Container>
  )

  }

export default Home