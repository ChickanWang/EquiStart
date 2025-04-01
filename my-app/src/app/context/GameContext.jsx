/*
  This page contains the GameContext, which is used to manage the game state and metrics.
  The entire application is wrapped in this context, allowing all components to access the game state and functions.
*/
"use client";
import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState("scenario1");
  const [metrics, setMetrics] = useState({
    employeeSatisfaction: 0,
    profitability: 0,
    employeeRetention: 0,
    investorSatisfaction: 0,
    publicPerception: 0,
    companyCash: 0,
    DEIIndex: 0,
    employeeEngagement: 0,
  });

  const updateMetric = (key, value) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  return (
    <GameContext.Provider value={{ gameState, setGameState, metrics, updateMetric }}>
      {children}
    </GameContext.Provider>
  );
};
