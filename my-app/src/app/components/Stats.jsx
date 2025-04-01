"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/GameContext";
import { Box, Typography, Tooltip } from "@mui/material";

const statColors = {
  employeeSatisfaction: "#4caf50",
  profitability: "#ff9800",
  employeeRetention: "#2196f3",
  investorSatisfaction: "#9c27b0",
  publicPerception: "#f44336",
  companyCash: "#ffd700",
  DEIIndex: "#673ab7",
  employeeEngagement: "#03a9f4",
};

const pixelFont = "'Press Start 2P', monospace"; // Load this in your _app.js or HTML <head>

const StatsComponent = () => {
  const { metrics, previousMetrics } = useContext(GameContext);
  const [diffs, setDiffs] = useState({});
  const previousMetricsRef = useRef({});

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

  return (
    <Box
      sx={{
        width: 220,
        backgroundColor: "#222",
        border: "4px solid #fff",
        borderRadius: 0,
        p: 2,
        boxShadow: "0 0 0 2px #000",
        fontFamily: pixelFont,
        color: "#0f0",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: pixelFont,
          fontSize: "0.8rem",
          textAlign: "center",
          mb: 2,
        }}
      >
        STATS
      </Typography>

      {Object.entries(metrics).map(([key, value]) => {
        const previous = previousMetrics[key] ?? value;
        const diff = value - previous;
        const diffText = diff > 0 ? `+${diff.toFixed(1)}` : `${diff.toFixed(1)}`;
        const tooltipText = diff === 0 ? "No change" : `Change: ${diffText}`;
        const barWidth = `${Math.min(100, Math.max(0, value))}%`;

        return (
          <Box key={key} sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: pixelFont,
                fontSize: "0.55rem",
                mb: "2px",
                color: "#fff",
              }}
            >
              {key.replace(/([A-Z])/g, " $1").trim().toUpperCase()}
            </Typography>
            <Tooltip title={tooltipText} arrow placement="top">
              <Box
                sx={{
                  backgroundColor: "#555",
                  border: "2px solid #000",
                  height: "12px",
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: barWidth,
                    height: "100%",
                    backgroundColor: statColors[key] || "#0ff",
                    transition: "width 0.3s ease",
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
