"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  ButtonGroupContext,
  ButtonGroupButtonContext,
} from "@mui/material";

const Scenario = ({
  title,
  text,
  research,
  background,
  sprite,
  position,
  choices,
  onChoice,
  setState,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        onClick={() => setState(research)}
        sx={{
          position: "fixed",
          bottom: "45vh",
          left: "10px",
          height: "20vh",
          zIndex: 2,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Box
          component="img"
          src="/sprites/research.png"
          alt="Research"
          sx={{
            height: "100%",
            objectFit: "contain",
            width: "auto",
          }}
        />
      </Box>
      <Box
        component="img"
        src={sprite}
        alt="Character"
        sx={{
          position: "fixed",
          bottom: "40vh",
          left: "65%",
          transform: "translateX(-50%)",
          height: "35vh",
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
          sx={{
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
              fontSize: "1.3rem",
              textAlign: "center",
              mb: 2,
              fontFamily: "Inconsolata, monospace",
            }}
          >
            {title}
          </Typography>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.8rem",
                mb: 1,
                fontFamily: "Inconsolata, monospace",
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
                height: "150px",
                maxWidth: "400px",
                background: "linear-gradient(145deg, #ffea8c, #ffd966)",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                display: "flex",
                p: 2,
                cursor: "pointer",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "#ffcc00",
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
                    fontFamily: "Inconsolata, monospace",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1rem",
                  }}
                >
                  {choice.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.7rem",
                    fontFamily: "Inconsolata, monospace",
                    color: "black",
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
