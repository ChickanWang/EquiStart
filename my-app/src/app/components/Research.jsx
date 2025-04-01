"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

const Research = ({ title, content, background, sprite, onContinue }) => {
  const [case1, setCase1] = useState("");
  const [case2, setCase2] = useState("");
  const [case3, setCase3] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${background || "/backgrounds/pixel_library.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Press Start 2P', Inconsolata, monospace",
        p: 2,
        position: "relative",
      }}
    >
      {/* Sprite Character */}
      {sprite && (
          <Box
          onClick={onContinue}
          sx={{
            position: "fixed",
            left: "10px",
            top: "45%",
            transform: "translateY(-50%)",
            height: "18vh",
            zIndex: 3,
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <Box
            component="img"
            src={sprite}
            alt="Return to Scenario"
            sx={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      )}

      {/* Content Box */}
      <Box
        sx={{
          backgroundColor: "#000",
          border: "4px solid #8B4513",
          padding: "24px",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 0 4px #000",
          zIndex: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "1rem",
            color: "#ffcc66",
            mb: 2,
            textShadow: "2px 2px 0 #000",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "0.75rem",
            color: "#ffcc66",
            whiteSpace: "pre-line",
            textShadow: "1px 1px 0 #000",
            mb: 4,
          }}
        >
          {content}
        </Typography>

        {/* Dropdowns */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[1, 2, 3].map((num) => (
            <FormControl
              key={num}
              fullWidth
              variant="filled"
              sx={{
                backgroundColor: "#222",
                border: "2px solid #8B4513",
                "& .MuiInputBase-root": {
                  color: "#ffcc66",
                  fontFamily: "'Press Start 2P', Inconsolata, monospace",
                  fontSize: "0.65rem",
                },
                "& .MuiInputLabel-root": {
                  color: "#ffcc66",
                  fontSize: "0.65rem",
                  fontFamily: "'Press Start 2P', Inconsolata, monospace",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffcc66",
                },
              }}
            >
              <InputLabel>{`Case Study ${num}`}</InputLabel>
              <Select
                value={num === 1 ? case1 : num === 2 ? case2 : case3}
                onChange={(e) => {
                  if (num === 1) setCase1(e.target.value);
                  else if (num === 2) setCase2(e.target.value);
                  else setCase3(e.target.value);
                }}
              >
              </Select>
            </FormControl>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Research;
