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

  const setState = (state) => {
    console.log(state);
    setGameState(state);
  };

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
        return <Scenario {...props} onChoice={handleChoice} setState={setState} />;
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
        width: "100%",
        minHeight: "100vh",
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
          onClick={handleHomeClick}
          sx={{
            fontFamily: "Inconsolata, monospace, cursive",
            fontSize: "1rem", // bumped for legibility
            backgroundColor: "#D38B56",
            color: "black",
            border: "4px solid black",
            borderRadius: '10px',
            px: 3,
            py: 2,
            textTransform: "none",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
            },
          }}
        >
          HOME
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
