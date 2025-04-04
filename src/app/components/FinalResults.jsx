"use client";
import React, { useContext, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { GameContext } from "../context/GameContext";

const FinalResults = ({ choicesHistory, restartGame }) => {
  const { metrics } = useContext(GameContext);

  // Define static multipliers based on importance (same as FundingRound)
  const multipliers = {
    employeeSatisfaction: 1.2,
    profitability: 1.5,
    publicPerception: 1.3,
    diversity: 1.1,
  };

  const metricsLabels = [
    "Employee Satisfaction",
    "Profitability",
    "Public Perception",
    "Diversity",
  ];

  // Calculate weighted overall company score
  const totalScore = Object.keys(metrics).reduce((acc, key) => {
    const multiplier = multipliers[key] || 1;
    return acc + metrics[key] * multiplier;
  }, 0);

  // Check if any individual (unweighted) metric falls below 25
  const failedMetric = Object.keys(metrics).find((key) => metrics[key] < 25);

  // Determine outcome message based on conditions
  let overallOutcome = "";
  let backgroundImage = "url('backgrounds/funding_round.png')";
  if (failedMetric || totalScore < 280) {
    overallOutcome =
      "FAILURE - Your company did not meet the minimum requirements.";
    backgroundImage = "url('backgrounds/losing_background.png')";
  } else {
    overallOutcome = "SUCCESS - Your company is thriving!";
  }

  // Define stat colors (same as Stats component)
  const statColors = {
    employeeSatisfaction: "#4caf50",
    profitability: "#ff9800",
    publicPerception: "#f44336",
    diversity: "#673ab7",
  };

  // Dispatch event to hide stats when FinalResults shows up
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("hideStats"));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 2,
        backgroundImage: backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          border: "4px solid #8B4513",
          padding: "20px",
          boxShadow: "0 0 0 4px #000",
          textAlign: "center",
          maxWidth: "800px",
          borderRadius: "12px",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          mb={3}
          sx={{ fontFamily: "'Press Start 2P', Inconsolata, monospace" }}
        >
          Final Results
        </Typography>
        <Typography
          variant="h5"
          color="white"
          mb={2}
          sx={{ fontFamily: "'Press Start 2P', Inconsolata, monospace" }}
        >
          Overall Company Score: {totalScore}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            maxWidth: "600px",
            textAlign: "center",
            mb: 4,
            fontFamily: "'Press Start 2P', Inconsolata, monospace",
          }}
        >
          {overallOutcome}
        </Typography>

        {/* Metrics Flow with numbers and bars (similar to Stats component) */}
        <Box sx={{ mt: 4, textAlign: "left" }}>
          {Object.entries(metrics).map(([key, value], index) => (
            <Box key={key} sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Press Start 2P', Inconsolata, monospace",
                  fontSize: "0.85rem",
                  color: "#ffcc66",
                }}
              >
                {metricsLabels[index]}: {value}
              </Typography>
              <Box
                sx={{
                  height: "12px",
                  width: "100%",
                  backgroundColor: "#333",
                  border: "2px solid #000",
                  boxShadow: "inset 1px 1px 0 #444",
                }}
              >
                <Box
                  sx={{
                    width: `${Math.max(0, Math.min(value, 100))}%`,
                    height: "100%",
                    backgroundColor: statColors[key] || "#0ff",
                    transition: "width 0.4s ease-in-out",
                    boxShadow: "1px 1px 0 #000",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Choice History Section */}
        <Box
          sx={{
            mt: 4,
            mb: 4,
            maxHeight: "250px",
            overflowY: "auto",
            textAlign: "left",
            borderTop: "2px solid #8B4513",
            pt: 2,
          }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{
              fontFamily: "'Press Start 2P', Inconsolata, monospace",
              mb: 1,
            }}
          >
            CHOICE HISTORY
          </Typography>
          {choicesHistory && choicesHistory.length > 0 ? (
            choicesHistory.map((choice, index) => (
              <Box
                key={index}
                sx={{
                  mb: 1,
                  fontFamily: "'Press Start 2P', Inconsolata, monospace",
                  color: "#ffcc66",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.75rem", mb: 0.5 }}
                >
                  Q: {choice.questionTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.75rem", mb: 0.5 }}
                >
                  Choice: {choice.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.75rem", mb: 0.5 }}
                >
                  Text: {choice.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.75rem", mb: 0.5 }}
                >
                  Effect:{" "}
                  {[
                    "employeeSatisfaction",
                    "profitability",
                    "publicPerception",
                    "diversity",
                  ]
                    .map((metric, i) => `${metric}: ${choice.effect[i]}`)
                    .join(", ")}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              No cices recorded.
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("showStats"));
            restartGame();
          }}
          sx={{
            fontFamily: "MedievalSharp, cursive, Inconsolata",
            backgroundColor: "#5b3a29",
            color: "#f2e6d0",
            border: "2px solid #40241a",
            boxShadow: "4px 4px 0px #40241a",
            textTransform: "none",
            padding: "10px 50px", // Increased padding
            fontSize: "1.2rem", // Increased font size
            "&:hover": {
              backgroundColor: "#6c4a35",
            },
          }}
        >
          Restart
        </Button>
      </Box>
    </Box>
  );
};

export default FinalResults;
