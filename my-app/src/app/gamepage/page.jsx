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

export function getRandomScenarioKey(scenes, seenScenes) {
  const keys = Object.keys(scenes)
    .filter(key => scenes[key].type === 'scenario' && !seenScenes.has(key));
  if (keys.length === 0) return null;
  return keys[Math.floor(Math.random() * keys.length)];
}

export default function GamePage() {
  const { gameState, setGameState, metrics, updateMetric, seenScenes } = useContext(GameContext);
  const router = useRouter();
  const scene = gameScenes[gameState];

  const setState = (state) => {
    console.log(state);
    setGameState(state);
  };

  const handleChoice = (choice) => {
    updateMetric("employeeSatisfaction", metrics.employeeSatisfaction + choice.effect);
    setGameState("dialogue" + String(seenScenes.size + 1));
  };

  const handleHomeClick = () => {
    if (window.confirm("Are you sure you want to return to the home page? Your progress may be lost if you refresh.")) {
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
      case "random":
        setGameState(getRandomScenarioKey(gameScenes, seenScenes));
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
        onClick={handleHomeClick}
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box
          component="img"
          src="/sprites/home_button.png"
          alt="Home"
          sx={{
            height: "100px",
            objectFit: "contain",
            width: "auto",
          }}
        />
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
