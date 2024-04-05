import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') { // Si el campo de búsqueda está vacío llama a onSearch con una cadena vacía para mostrar todos los Pokémon
      onSearch('');
    }
  };

  return (
    <div>
      <TextField 
        label="Buscar Pokémon"
        value={searchTerm}
        onChange={handleChange} // Agrega el controlador de eventos para el evento onChange
        onKeyDown={handleKeyPress}
      />
      <Button variant="contained" onClick={handleSearch}>Buscar</Button>
    </div>
  );
};

export default SearchBar;
