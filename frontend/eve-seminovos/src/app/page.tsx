"use client";

import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Carro {
  id: number;
  nome: string;
  marca: string;
  ano: number;
  preco: number;
  img: string;
}

export async function fetchCarros(): Promise<Carro[]> {
  const response = await fetch("http://127.0.0.1:5000/carros");
  const data = (await response.json()) as Carro[];
  return data;
}

export default function Home() {
  const [carros, setCarros] = React.useState<Carro[]>([]);

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
