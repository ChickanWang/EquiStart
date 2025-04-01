/* 
  This is the file that contains the main game page logic.
  It imports the GameContext to access the game state and functions,
  and the gameScenes to render the appropriate scene based on the game state.

  (gameScenes is a static file that contains the game scenes [dialogues, scenarios, research] and their properties)
*/

"use client";
import React, { useContext } from 'react';

import { GameContext } from '../context/GameContext';
import { gameScenes } from '../config/GameScenes';
import Dialogue from '../components/Dialogue';
import Research from '../components/Research';
import Scenario from '../components/Scenario';

export default function GamePage() {
  const { gameState, setGameState, metrics, updateMetric } = useContext(GameContext);
  const scene = gameScenes[gameState];

  const handleChoice = (choice) => {
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

  return <>{renderScene()}</>;
}
