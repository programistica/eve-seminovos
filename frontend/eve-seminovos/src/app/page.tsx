import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Home() {
  const carros = [
    {
      nome: "Corola",
      marca: "Toyota",
      ano: "2021",
      preco: "R$ 100.000,00",
      img: "https://picsum.photos/200/300",
    },
    {
      nome: "Civic",
      marca: "Honda",
      ano: "2020",
      preco: "R$ 90.000,00",
      img: "https://picsum.photos/200/300",
    },
    {
      nome: "HB20",
      marca: "Hyundai",
      ano: "2019",
      preco: "R$ 80.000,00",
      img: "https://picsum.photos/200/300",
    },
    {
      nome: "Palio",
      marca: "Fiat",
      ano: "2018",
      preco: "R$ 70.000,00",
      img: "https://picsum.photos/200/300",
    },
    {
      nome: "Gol",
      marca: "Volkswagen",
      ano: "2017",
      preco: "R$ 60.000,00",
      img: "https://picsum.photos/200/300",
    },
  ];

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
      {carros.map((carro) => (
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
