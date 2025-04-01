"use client";
import React from 'react';
import { Box, Button, Card, CardMedia, CardActionArea, Typography } from '@mui/material';

const Scenario = ({
  title,
  text,
  background,
  sprite,
  position,
  choices,
  onChoice,
}) => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      minHeight: '100vh',
      width: '100%',
    }}>
      <Typography variant="h3" gutterBottom>{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Card sx={{ maxWidth: 100, mr: 2, float: position }}>
          <CardMedia component="img" image={sprite} alt="Character" />
        </Card>
        <Typography variant="body1">{text}</Typography>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "25vh",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          color: "white",
          p: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "4px solid #ffcc00",
          gap: 2,
        }}
      >
        {choices.map((choice, i) => (
          <Card
            key={i}
            sx={{
              flex: "1 1 250px",
              height: "100px",
              maxWidth: "300px",

              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              display: "flex",
              padding: 2,
            }}
          >
            <CardActionArea
              onClick={() => onChoice(choice)}
              sx={{ width: "100%", height: "100%" }} // fill the Card
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textAlign: "center",
                  mb: 2,
                  fontFamily: "'Press Start 2P'",
                }}
              >
                {choice.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.8rem",
                  mb: 1,
                  fontFamily: "'Press Start 2P'",
                }}
              >
                {choice.text}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Scenario;
