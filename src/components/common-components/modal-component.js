import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const versionColors = {
  'red': '#FF0000',
  'blue': '#0000FF',
  'yellow': '#FFFF00',
  'gold': '#FFD700',
  'silver': '#C0C0C0',
  'crystal': '#4682B4',
  'ruby': '#FF4500',
  'sapphire': '#0000FF',
  'emerald': '#008000',
  'firered': '#FF4500',
  'leafgreen': '#00FF00',
  'diamond': '#B9F2FF',
  'pearl': '#F0F8FF',
  'platinum': '#E6E6FA',
  'heartgold': '#FFD700',
  'soulsilver': '#C0C0C0',
  'black': '#000000',
  'white': '#FFFFFF',
  'black-2': '#000000',
  'white-2': '#FFFFFF'
};

const PokemonModal = ({ open, onClose, pokemonData }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      axios.get(pokemonData.url)
        .then(response => {
          setPokemonDetails(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching Pokemon details:', error);
          setLoading(false);
        });
    }
  }, [open, pokemonData.url]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, backgroundColor: 'white', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Typography id="modal-title" variant="h6" component="h2">
          {pokemonData.name}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {loading ? "Loading..." : (
            pokemonDetails && (
              <>
                <img src={pokemonDetails.sprites.front_default} alt={pokemonData.name} />
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">Height</TableCell>
                        <TableCell>{pokemonDetails.height}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Weight</TableCell>
                        <TableCell>{pokemonDetails.weight}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Abilities</TableCell>
                        <TableCell>{pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Types</TableCell>
                        <TableCell>{pokemonDetails.types.map(type => type.type.name).join(', ')}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Base Experience</TableCell>
                        <TableCell>{pokemonDetails.base_experience}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Game Versions</TableCell>
                        <TableCell>
                          {pokemonDetails.game_indices.map(version => (
                            <Chip key={version.version.name} label={version.version.name} style={{ margin: 4, backgroundColor: versionColors[version.version.name.toLowerCase()], color: 'white' }} />
                          ))}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )
          )}
        </Typography>
      </div>
    </Modal>
  );
};

export default PokemonModal;
