"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  Divider,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Botoes from "./Botoes.1";

interface Carro {
  id: number;
  nome: string;
  marca: string;
  ano: number;
  preco: number;
  img: string;
}

export default function Lista({ carros }: { carros: Carro[] }) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "80%",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
      elevation={3}
    >
      <Box></Box>
      <List dense sx={{ width: "80%", bgcolor: "background.paper" }}>
        {carros.map((carro) => (
          <>
            <ListItem key={carro.id} secondaryAction={<Checkbox edge="end" />}>
              <ListItemButton>
                <ListItemText
                  primary={carro.nome}
                  secondary={carro.marca}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </>
        ))}
      </List>
    </Paper>
  );
}
