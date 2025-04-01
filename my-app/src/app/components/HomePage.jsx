"use client";
import React from 'react';
import Link from 'next/link';
import { Box, Button, Typography, Container } from '@mui/material';

export default function Homepage() {
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
        <Link href="/gamepage" passHref>
          <Button variant="contained" color="primary" size="large">
            Play Now
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
