/*
  This page contains the GameContext, which is used to manage the game state and metrics.
  The entire application is wrapped in this context, allowing all components to access the game state and functions.
*/

"use client";
import React, { createContext, useState, useRef } from "react";

export const GameContext = createContext();

const metricsStarting = {
  employeeSatisfaction: 50,
  profitability: 50,
  publicPerception: 50,
  diversity: 50,
};

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState("dialogue1");

  const [metrics, setMetrics] = useState(metricsStarting);

  const [previousMetrics, setPreviousMetrics] = useState(metrics); // ← NEW

  const [seenScenes, setSeenScenes] = useState(new Set());
  const [prevState, setPrevState] = useState("");

  const [choicesHistory, setChoicesHistory] = useState([]);
  const addChoice = (choiceObj) => {
    setChoicesHistory((prev) => [...prev, choiceObj]);
  };

  const updateMetric = (key, value) => {
    setPreviousMetrics((prev) => ({ ...prev, [key]: metrics[key] }));
    setMetrics((prev) => ({ ...prev, [key]: value }));
  };

  const restartGame = () => {
    setGameState("dialogue1");
    setMetrics(metricsStarting);
    setSeenScenes(new Set());
    setPrevState("");
    setChoicesHistory([]);
    setPreviousMetrics(metricsStarting);
  };

  const overlayAudioRef = useRef(null);
  const playOverlay = () => {
    if (overlayAudioRef.current) {
      overlayAudioRef.current.volume = 1.0;
      overlayAudioRef.current.pause();
      overlayAudioRef.current.currentTime = 0;
      overlayAudioRef.current.play();
    }
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
        choicesHistory, // added to provider
        addChoice, // added to provider
        restartGame,
        playOverlay,
      }}
    >
      {children}
      <audio ref={overlayAudioRef} src="/music/button.wav" />
    </GameContext.Provider>
  );
};
