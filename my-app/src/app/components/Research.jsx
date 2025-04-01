"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Research = ({ title, content, background, onContinue }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        textAlign: "center",
        backgroundColor: background ? "transparent" : "#f9f9f9",
      }}
    >
      <Container maxWidth="md" sx={{ backgroundColor: "rgba(255,255,255,0.85)", borderRadius: 2, p: 4 }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          gutterBottom
          sx={{
            fontSize: "2.5rem",
            mb: 2,
            fontFamily: "Inconsolata, monospace",
            color: "#333",
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          fontSize="1.2rem" 
          sx={{ 
            mb: 4,
            fontFamily: "Inconsolata, monospace",
          }}
        >
          {content}
        </Typography>
        {onContinue && (
          <Box
            component="img"
            src="/buttons/back_to_work.jpg"
            alt="Back to Work"
            onClick={onContinue}
            sx={{
              mt: 2,
              cursor: "pointer",
              maxWidth: "300px",
              width: "100%",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default Research;
