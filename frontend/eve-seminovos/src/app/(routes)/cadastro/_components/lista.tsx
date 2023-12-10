"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Checkbox,
  Divider,
} from "@mui/material";

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
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {carros.map((carro) => (
        <>
          <ListItem key={carro.id} secondaryAction={<Checkbox edge="end" />}>
            <ListItemButton>
              <ListItemText primary={carro.nome} />
            </ListItemButton>
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </>
      ))}
    </List>
  );
}
