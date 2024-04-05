import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useCardComponentViewer = (url) => {
  const [dataUrl, setDataUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(response => {
        setDataUrl(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      });
  }, [url]);

  return {
    dataUrl,
    loading
  };
};

const CardPokemon = ({ pokemonData }) => {
  const { dataUrl, loading } = useCardComponentViewer(pokemonData.url);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {JSON.stringify(pokemonData.name)}
          {loading ? "Loading..." : dataUrl && <img src={dataUrl.sprites.front_default} alt={pokemonData.name} />}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={loading}>Fetching Pokemon Data</Button>
      </CardActions>
    </Card>
  );
}

export default CardPokemon;
