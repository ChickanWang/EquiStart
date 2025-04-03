import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea, Link } from "@mui/material";

const Research = ({ title, content, sources, background, sprite, onContinue }) => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${background || "/backgrounds/pixel_library.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "'Press Start 2P', Inconsolata, monospace",
      }}
    >
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
            transition: "transform 0.2s",
            "&:hover": { transform: "translateY(-50%) scale(1.1)" },
          }}
        >
          <Box
            component="img"
            src={sprite}
            alt="Return to Scenario"
            sx={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </Box>
      )}

      <Box
        sx={{
          backgroundColor: "#ede5d9",
          border: "1px solid #ccc",
          padding: "24px",
          maxWidth: "900px",
          margin: "auto",
          overflowY: "auto",
          height: "80vh",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          zIndex: 3,
          border: "5px solid black",
        }}
      >
        <header>
          <Typography variant="h2" sx={{ fontFamily: "Georgia, serif", color: "#222", mb: 0 }}>
            The Diversity Gazette
          </Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: "Georgia, serif", color: "#666", mb: 4 }}>
            {currentDate}
          </Typography>
        </header>
        <article>
          <Typography variant="h4" sx={{ fontFamily: "Georgia, serif", color: "#222", mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Georgia, serif", color: "#333", mb: 4 }}>
            {content}
          </Typography>
        </article>
        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sources.map((source, idx) => (
            <Card
              key={idx}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              }}
            >
              <CardActionArea component={Link} href={source.url} target="_blank" rel="noopener">
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <CardMedia
                    component="img"
                    image={source.img}
                    alt={source.title}
                    sx={{ 
                      maxWidth: "150px",
                      objectFit: "cover",
                      borderRadius: "4px 0 0 4px",
                      borderRight: "1px solid #ccc",
                      boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <CardContent
                    sx={{
                      color: "#222",
                      fontFamily: "Georgia, serif", 
                    }}
                  >
                    <Typography variant="h6" sx={{ fontFamily: "Georgia, serif", color: "#333", mb: 4  }}>
                      {source.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{
                        color: "#222",
                        fontFamily: "Georgia, serif", 
                        color: "#333", 
                        mb: 4,
                        textAlign: "left",
                      }}>
                        {source.body}
                      </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </section>
      </Box>
    </Box>
  );
};

export default Research;
