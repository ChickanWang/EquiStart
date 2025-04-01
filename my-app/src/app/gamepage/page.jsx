// src/app/GamePage.jsx or similar
"use client";
import React, { useContext } from 'react';

import { GameContext } from '../context/GameContext';
import { gameScenes } from '../static/GameScenes';
import Dialogue from '../components/Dialogue';
import Research from '../components/Research';
import Scenario from '../components/Scenario';

export default function GamePage() {
  const { gameState, setGameState, metrics, updateMetric } = useContext(GameContext);
  const scene = gameScenes[gameState];

  const handleChoice = (choice) => {
    // Update metrics and state here as needed.
    updateMetric("employeeSatisfaction", metrics.employeeSatisfaction + choice.effect);
    setGameState(choice.nextState);
  };

  const renderScene = () => {
    if (!scene) return <div>Loading...</div>;
    const { type, props } = scene;
    switch (type) {
      case "dialogue":
        return <Dialogue {...props} />;
      case "scenario":
        return <Scenario {...props} onChoice={handleChoice} />;
      case "research":
        return <Research {...props} />;
      default:
        return <div>Unknown state</div>;
    }
  };

  return <div>{renderScene()}</div>;
}
