"use client";
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { GameContext } from '../context/GameContext';

export default function Homepage() {
  const router = useRouter();
  const { setGameState } = useContext(GameContext);

  const handlePlayNow = () => {
    setGameState('dialogue1');
    router.push('/gamepage');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/backgrounds/cityscape.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontFamily: "'Press Start 2P', Inconsolata, monospace",
        color: '#ffcc66',
        textShadow: '2px 2px 0 #000',
      }}
    >
      <Box
        sx={{
          width: '600px',
          height: '350px',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          border: '4px solid #8B4513',
          boxShadow: '0 0 0 4px #000',
          borderRadius: 1,
          px: 3,
          py: 5,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '2.5rem',
            mb: 3,
            fontFamily: "'Press Start 2P', Inconsolata, monospace",
            color: '#ffcc66',
          }}
        >
          Welcome to EquiStart
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.5rem',
            fontFamily: "'Press Start 2P', Inconsolata, monospace",
          }}
        >
          Make key decisions, manage funding, and build an inclusive company.
        </Typography>

        {/* Retro Pixel Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/play_now.png"
            alt="Play Now"
            onClick={handlePlayNow}
            sx={{
              cursor: "pointer",
              width: "260px",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
