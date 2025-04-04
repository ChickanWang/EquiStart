"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const Dialogue = ({
  dialogueData,
  background,
  sprite,
  nextState,
  onComplete,
}) => {
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
            fontFamily: "Inconsolata, monospace, cursive",
          }}
        >
          {dialogueData[index]}
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            variant="contained"
            onClick={handleBack}
            disabled={index === 0}
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
            ←
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
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
            {index < dialogueData.length - 1 ? "→" : "OK"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dialogue;
