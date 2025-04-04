/*
  Component to display the game statistics.
*/

"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/GameContext";
import { Box, Typography, Tooltip } from "@mui/material";

const statColors = {
  employeeSatisfaction: "#4caf50",
  profitability: "#ff9800",
  publicPerception: "#f44336",
  diversity: "#673ab7",
};

const pixelFont = "'Press Start 2P', Inconsolata, monospace"; // Load in your app

const StatsComponent = () => {
  const { metrics, previousMetrics } = useContext(GameContext);
  const [diffs, setDiffs] = useState({});
  const previousMetricsRef = useRef({});

  // New state flag to control visibility
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prev = previousMetricsRef.current;
    const newDiffs = {};
    for (const key in metrics) {
      const current = metrics[key];
      const previous = prev[key] ?? current;
      newDiffs[key] = current - previous;
    }
    setDiffs(newDiffs);
    previousMetricsRef.current = { ...metrics };
  }, [metrics]);

  // Set up event listeners to hide or show the stats panel
  useEffect(() => {
    const hideHandler = () => setVisible(false);
    const showHandler = () => setVisible(true);

    window.addEventListener("hideStats", hideHandler);
    window.addEventListener("showStats", showHandler);

    // Cleanup
    return () => {
      window.removeEventListener("hideStats", hideHandler);
      window.removeEventListener("showStats", showHandler);
    };
  }, []);

  if (!visible) return null;

  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#1a1a1a",
        border: "4px solid #8B4513",
        boxShadow: "0 0 0 4px #000",
        borderRadius: "6px",
        p: 2,
        fontFamily: pixelFont,
        color: "#ffcc66",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: "0.7rem",
          fontFamily: pixelFont,
          textAlign: "center",
          mb: 2,
          textShadow: "1px 1px 0 #000",
        }}
      >
        STATS
      </Typography>

      {Object.entries(metrics).map(([key, value]) => {
        const previous = previousMetrics[key] ?? value;
        const diff = value - previous;
        const diffText =
          diff > 0 ? `+${Math.round(diff)}` : `${Math.round(diff)}`;
        const tooltipText = diff === 0 ? "No change" : `Change: ${diffText}`;
        const barWidth = `${Math.min(100, Math.max(0, value))}%`;

        return (
          <Box key={key} sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontSize: "0.55rem",
                fontFamily: pixelFont,
                mb: "4px",
                color: "#ffcc66",
                textShadow: "1px 1px 0 #000",
              }}
            >
              {key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .toUpperCase()}
            </Typography>
            <Tooltip title={tooltipText} arrow placement="top">
              <Box
                sx={{
                  height: "12px",
                  width: "100%",
                  backgroundColor: "#333",
                  border: "2px solid #000",
                  boxShadow: "inset 1px 1px 0 #444",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: barWidth,
                    height: "100%",
                    backgroundColor: statColors[key] || "#0ff",
                    transition: "width 0.4s ease-in-out",
                    boxShadow: "1px 1px 0 #000",
                  }}
                />
              </Box>
            </Tooltip>
          </Box>
        );
      })}
    </Box>
  );
};

export default StatsComponent;
