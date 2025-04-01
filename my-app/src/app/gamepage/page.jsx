"use client";
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { GameContext } from '../context/GameContext';
import { gameScenes } from '../config/GameScenes';
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
          return (
            <Research
              {...props}
              background={props.background}
              onContinue={() => {
                if (props.nextState) {
                  setGameState(props.nextState);
                }
              }}
            />
          );
        
        
      default:
        return <div>Unknown state</div>;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",          // Fix: avoid 100vw to prevent horizontal scrollbars
        minHeight: "100vh",     // Ensure full screen height
        overflow: "hidden",
      }}
    >
      {/* Render the current scene (fills entire area) */}
      {renderScene()}

      {/* Home Button - Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 10,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleHomeClick}
        >
          Home
        </Button>
      </Box>

      {/* Stats Panel - Top Right */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        <StatsComponent />
      </Box>
    </Box>
  );
}
