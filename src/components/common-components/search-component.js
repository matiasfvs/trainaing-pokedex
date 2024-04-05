import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); //searchTerm definido como variable de estado y el setSearchTerm para actualizar el estado del SearchTerm (al momento de buscar pokémon)

  const handleSearch = () => { //La variable handleSearch maneja la busqueda y filtra los datos y actualiza el estado de la constante filteredData especificada en el Home
    onSearch(searchTerm);
  };

  return (
    <div>
      <TextField 
        label="Buscar Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>Buscar</Button>
    </div>
  );
};

export default SearchBar;
