"use client";
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography, Container } from '@mui/material';
import { GameContext } from '../context/GameContext';

export default function Homepage() {
  const router = useRouter();
  const { setGameState } = useContext(GameContext);

  const handlePlayNow = () => {
    setGameState('dialogue1'); // 👈 Always start from the beginning
    router.push('/gamepage');  // 👈 Navigate to game
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #42a5f5, #ab47bc)',
      }}
    >
      <Container sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to EquiStart
        </Typography>
        <Typography variant="h6" gutterBottom>
          Make key decisions, manage funding, and build an inclusive company.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlePlayNow}
        >
          Play Now
        </Button>
      </Container>
    </Box>
  );
}
