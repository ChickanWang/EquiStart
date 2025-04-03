/*
  This page contains the GameContext, which is used to manage the game state and metrics.
  The entire application is wrapped in this context, allowing all components to access the game state and functions.
*/

"use client";
import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState("dialogue1");

  const [metrics, setMetrics] = useState({
    employeeSatisfaction: 50,
    profitability: 50,
    publicPerception: 50,
    diversity: 50,
  });

  const [previousMetrics, setPreviousMetrics] = useState(metrics); // ← NEW

  const [seenScenes, setSeenScenes] = useState(new Set());
  const [prevState, setPrevState] = useState("");

  const updateMetric = (key, value) => {
    setPreviousMetrics((prev) => ({ ...prev, [key]: metrics[key] })); // Save current before update
    setMetrics((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        metrics,
        previousMetrics,
        updateMetric,
        seenScenes,
        setSeenScenes,
        prevState,
        setPrevState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
