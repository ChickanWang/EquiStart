"use client";
import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { GameContext } from "../context/GameContext";

const FundingRound = ({ setState }) => {
  const { metrics } = useContext(GameContext);

  // Define static multipliers based on importance
  const multipliers = {
    employeeSatisfaction: 1.2,
    profitability: 1.5,
    publicPerception: 1.3,
    diversity: 1.1,
  };

  // Calculate running score as the weighted sum of metrics
  const runningScore = Object.keys(metrics).reduce((acc, key) => {
    const multiplier = multipliers[key] || 1;
    return acc + metrics[key] * multiplier;
  }, 0);

  // New extended dialog logic for more range and variety
  let dialog = "";
  if (runningScore > 400) {
    dialog = "Your company is on fire, setting new industry standards!";
  } else if (runningScore > 350) {
    dialog = "Your company is unstoppable, soaring high into success!";
  } else if (runningScore > 300) {
    dialog = "Your company is thriving, keep up the awesome work!";
  } else if (runningScore > 250) {
    dialog = "Your company is healthy and growing steadily.";
  } else if (runningScore > 200) {
    dialog = "Your company is steady, though challenges remain.";
  } else if (runningScore > 150) {
    dialog = "Your company is struggling, reconsider your strategies.";
  } else {
    dialog = "Your company needs a turnaround, urgent changes required!";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 2,
        // Updated background styling for a cleaner look.
        backgroundImage: "url('backgrounds/funding_round.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* New styled container for content with RPG pixel game model styling */}
      <Box
        sx={{
          backgroundColor: "#000",
          border: "4px solid #8B4513",
          padding: "20px",
          boxShadow: "0 0 0 4px #000",
          textAlign: "center",
          maxWidth: "800px",
          borderRadius: "12px", // Added to round the corners
        }}
      >
        <Typography
          variant="h3"
          color="white"
          mb={3}
          sx={{ fontFamily: "'Press Start 2P', Inconsolata, monospace" }}
        >
          Company Evalutation
        </Typography>
        <Typography
          variant="h5"
          color="white"
          mb={2}
          sx={{ fontFamily: "'Press Start 2P', Inconsolata, monospace" }}
        >
          Running Metric Score: {runningScore}
        </Typography>
        {/* Centered image with text arranged above and below */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
            mb: 2,
          }}
        >
          {/* Piggy bank image centered */}
          <Box
            component="img"
            src="/sprites/piggybank.png"
            alt="Piggy Bank"
            sx={{ height: "120px", mb: 2 }}
          />
          {/* Dialog message */}
          <Typography
            variant="body1"
            color="white"
            sx={{
              maxWidth: "600px",
              textAlign: "center",
              mb: 2,
              fontFamily: "'Press Start 2P', Inconsolata, monospace",
            }}
          >
            {dialog}
          </Typography>
          {/* Additional details */}
          <Typography
            variant="body2"
            color="white"
            sx={{
              maxWidth: "600px",
              textAlign: "center",
              fontFamily: "'Press Start 2P', Inconsolata, monospace",
              fontSize: "0.65rem",
            }}
          >
            Investors are looking closely at your financial health. The running
            metric score represents the funding potential and how solid your
            company’s energy is. Analyze these metrics as you prepare for future
            rounds and strategic decisions.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            setState("nextState");
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
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default FundingRound;
