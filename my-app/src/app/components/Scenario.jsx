"use client";
import React from 'react';
import { Box, Button, Card, CardMedia, CardActionArea, Typography, ButtonGroupContext, ButtonGroupButtonContext } from '@mui/material';

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
      <Box
        component="img"
        src={sprite}
        alt="Character"
        sx={{
          position: "fixed",
          bottom: "40vh",
          left: "50%",
          transform: "translateX(-50%)",
          height: "50vh",
          objectFit: "contain",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40vh",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          color: "white",
          p: 1,
        }}
      >
        <Box
          sx= {{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh",
            padding: 2,
            borderBottom: "4px solid #ffcc00",
          }}
        >
          <Typography 
            variant="h5"
            fontWeight="bold"
            color="#ffcc00"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 2,
              fontFamily: "'Press Start 2P'",
            }}
          >
            {title}
          </Typography>
          <div 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              mb: 4 
            }}>
            <Typography 
              variant="body1"
              sx={{
                fontSize: "1rem",
                mb: 1,
                fontFamily: "'Press Start 2P'",
                textAlign: "center",
              }}
            >
              {text}
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "4px solid #ffcc00",
            gap: 2,
            height: "25vh",
          }}
        >
          {choices.map((choice, i) => (
            <Card
              key={i}
              sx={{
                flex: "1 1 250px",
                height: "100px",
                maxWidth: "300px",
                borderRadius: "16px",
                background: "linear-gradient(145deg, #f0c27b, #4b1248)",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
                },
                display: "flex",
                p: 2,
                cursor: "pointer",
              }}
            >
              <CardActionArea
                onClick={() => onChoice(choice)}
                sx={{ width: "100%", height: "100%" }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    fontFamily: "'Press Start 2P'",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {choice.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.8rem",
                    fontFamily: "'Press Start 2P'",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {choice.text}
                </Typography>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Scenario;
