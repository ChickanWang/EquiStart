/* 
  Main GamePage component for the game
  This page contains the main game logic and rendering.
  It handles the game state, metrics, and rendering of different scenes.
  It also contains the logic for transitioning between scenes and handling user choices.
*/

"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GameContext } from "../context/GameContext";
import { gameScenes } from "../config/GameScenes";
import Dialogue from "../components/Dialogue";
import Research from "../components/Research";
import Scenario from "../components/Scenario";
import FundingRound from "../components/FundingRound";
import FinalResults from "../components/FinalResults";
import StatsComponent from "../components/Stats";
import { Box } from "@mui/material";

/* 
  Function to get a random scenario key from the game scenes.
  The logic to handle moving the game toward funding rounds and ending the game
  will be handled here, based on the number of seen scenes.
*/
export function handleNextState(
  scenes,
  seenScenes,
  setSeenScenes,
  prevState,
  setPrevState
) {
  console.log("yeer", prevState);
  if (seenScenes.size >= 6) {
    // If 6 or more scenes have been seen, end the game
    return "finalResults";
  } else if (
    seenScenes.size % 2 == 0 &&
    seenScenes.size > 0 &&
    prevState !== "fundingRound"
  ) {
    // Move to a funding round every 2 scenes
    setPrevState("fundingRound");
    return "fundingRound";
  }

  setPrevState("scenario");

  // Otherwise, get a random scene
  const keys = Object.keys(scenes).filter(
    (key) => scenes[key].type === "scenario" && !seenScenes.has(key)
  );

  const randomScene = keys[Math.floor(Math.random() * keys.length)];
  setSeenScenes((prev) => new Set(prev).add(randomScene));

  console.log(`Random scene selected: ${randomScene}`);
  return randomScene;
}

// Main GamePage component
export default function GamePage() {
  const {
    gameState,
    setGameState,
    metrics,
    updateMetric,
    seenScenes,
    setSeenScenes,
    prevState,
    setPrevState,
  } = useContext(GameContext);
  const router = useRouter();
  const scene = gameScenes[gameState];

  useEffect(() => {
    console.log(gameState);
    if (gameState === "nextState") {
      console.log("HELLOOOO");
      setGameState(
        handleNextState(
          gameScenes,
          seenScenes,
          setSeenScenes,
          prevState,
          setPrevState
        )
      );
    }
  }, [gameState, seenScenes]);

  const setState = (state) => {
    console.log(state);
    setGameState(state);
  };

  const handleChoice = (choice) => {
    updateMetric(
      "employeeSatisfaction",
      metrics.employeeSatisfaction + choice.effect
    );
    setGameState("dialogue" + String(seenScenes.size + 1));
    const metricKeys = [
      "employeeSatisfaction",
      "profitability",
      "publicPerception",
      "diversity",
    ];

    choice.effect.forEach((change, index) => {
      const metric = metricKeys[index];
      if (metric) {
        updateMetric(metric, metrics[metric] + change);
      }
    });

    setGameState(choice.nextState);
  };

  const handleHomeClick = () => {
    if (
      window.confirm(
        "Are you sure you want to return to the home page? Your progress may be lost if you refresh."
      )
    ) {
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
        return (
          <Scenario {...props} onChoice={handleChoice} setState={setState} />
        );
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
      case "fundingRound":
        return <FundingRound setState={setState} />;
      case "finalResults":
        return <FinalResults />;
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
