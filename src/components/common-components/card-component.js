import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

cardComponentViewer = () => {
    const [dataUrl, setDataUrl] = useState()

    const fetchPokemon = () => {
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


    return {
        setDataUrl,
    }

}


const CardPokemon = ({ pokemonData })=> {

  const {setDataUrl} = cardComponentViewer()

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {JSON.stringify(pokemonData.name)}
          {setDataUrl(pokemonData.url)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardPokemon