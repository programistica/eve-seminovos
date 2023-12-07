"use client";

import * as React from "react";
import fetchCarros from "@/services/fetchCarros";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CarroContext } from "@/app/CarroContextProvider";

export default function Home() {
  const { filter, setFilter, carros, setCarros } =
    React.useContext(CarroContext);

  React.useEffect(() => {
    fetchCarros().then((data) => {
      setCarros(data);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        width: "80%",
        height: "90vh",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {carros
        .sort((a, b) => a.preco - b.preco)
        .map((carro) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={carro.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {carro.nome}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {carro.marca}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {carro.ano}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {carro.preco}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
