"use client";
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { GameContext } from '../context/GameContext';
import { gameScenes } from '../static/GameScenes';
import Dialogue from '../components/Dialogue';
import Research from '../components/Research';
import Scenario from '../components/Scenario';
import StatsComponent from '../components/Stats';
import { Box, Button } from '@mui/material';

export default function GamePage() {
  const { gameState, setGameState, metrics, updateMetric } = useContext(GameContext);
  const router = useRouter();
  const scene = gameScenes[gameState];

  const handleChoice = (choice) => {
    updateMetric("employeeSatisfaction", metrics.employeeSatisfaction + choice.effect);
    setGameState(choice.nextState);
  };

  const handleHomeClick = () => {
    if (window.confirm("Are you sure you want to return to the home page? Your progress may be lost.")) {
      router.push("/");
    }
  };

  const renderScene = () => {
    if (!scene) return <div>Loading...</div>;
    const { type, props } = scene;

    switch (type) {
      case "dialogue":
        return (
          <Dialogue
            {...props}
            onComplete={(nextState) => {
              if (nextState) {
                setGameState(nextState);
              }
            }}
          />
        );
      case "scenario":
        return <Scenario {...props} onChoice={handleChoice} />;
      case "research":
        return <Research {...props} />;
      default:
        return <div>Unknown state</div>;
    }
  };

  return (
    <Box display="flex" flexDirection="row" height="100vh" p={2}>
      <Box flexGrow={1}>{renderScene()}</Box>
      <Box width={250} ml={2} display="flex" flexDirection="column" alignItems="center">
        <StatsComponent />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleHomeClick}
          sx={{ mt: 2 }}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
}
