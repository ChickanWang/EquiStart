"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/GameContext";
import { Box, Typography, LinearProgress, Tooltip } from "@mui/material";

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

const StatsComponent = () => {
  const { metrics, previousMetrics } = useContext(GameContext);
  const [diffs, setDiffs] = useState({});
  const previousMetricsRef = useRef({});

  // Calculate differences when metrics change
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
        width: 200,
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="center">
        Stats
      </Typography>

      {Object.entries(metrics).map(([key, value]) => {
        const current = metrics[key];
        const previous = previousMetrics[key] ?? current;
        const diff = current - previous;
        const diffText = diff > 0 ? `+${diff.toFixed(1)}` : `${diff.toFixed(1)}`;
        const tooltipText = diff === 0 ? "No change" : `Change: ${diffText}`;

        return (
          <Box key={key} sx={{ mb: 1 }}>
            <Typography variant="caption" fontWeight="bold">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </Typography>
            <Tooltip title={tooltipText} arrow placement="top">
              <Box>
                <LinearProgress
                  variant="determinate"
                  value={Math.min(100, Math.max(0, value))}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: "#ddd",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: statColors[key] || "#607d8b",
                    },
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
