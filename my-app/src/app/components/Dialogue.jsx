"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const Dialogue = ({ dialogueData, onComplete, nextState }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < dialogueData.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete && onComplete(nextState); // Pass nextState to parent
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "25vh",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        color: "white",
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "4px solid #ffcc00",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 2,
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {dialogueData[index]}
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button
          variant="contained"
          onClick={handleBack}
          disabled={index === 0}
          sx={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          ←
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {index < dialogueData.length - 1 ? "→" : "OK"}
        </Button>
      </Box>
    </Box>
  );
};

export default Dialogue;
