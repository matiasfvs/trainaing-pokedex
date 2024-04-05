import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); // searchTerm definido como variable de estado y setSearchTerm para actualizar el estado del searchTerm (al momento de buscar pokémon)

  const handleSearch = () => { // La variable handleSearch maneja la búsqueda y filtra los datos y actualiza el estado de la constante filteredData especificada en el Home
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Llama a handleSearch cuando se presiona la tecla Enter
    }
  };

  return (
    <div>
      <TextField 
        label="Buscar Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress} // Evento del onKeyDown para apretar enter y que busque
      />
      <Button variant="contained" onClick={handleSearch}>Buscar</Button>
    </div>
  );
};

export default SearchBar;

