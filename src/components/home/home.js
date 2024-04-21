import React from 'react';
import { Container } from '@mui/material';
import ContainerPrincipal from '../common-components/ContainerPrincipal';
import Nav from '../header/nav'; // Importa el componente Nav
import '../../styles/styles.css'; // Importa el archivo de estilos desde la carpeta src/styles

const Home = () => {
  return (
    <Container>
      <Nav />
      <ContainerPrincipal />
    </Container>
  );
};

export default Home;
