"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const Dialogue = ({ dialogueData, background, sprite, nextState, onComplete }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < dialogueData.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete && onComplete(nextState);
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
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Character Sprite */}
      {sprite && (
        <Box
          component="img"
          src={sprite}
          alt="Character"
          sx={{
            position: "absolute",
            bottom: "25vh", // Just above the dialogue box
            left: "50%",
            transform: "translateX(-50%)",
            height: "50vh",
            objectFit: "contain",
            zIndex: 2,
          }}
        />
      )}

      {/* Dialogue Box */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
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
          zIndex: 3,
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
    </Box>
  );
};

export default Dialogue;
