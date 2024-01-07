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

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import Carro from "@/interfaces/carros/carro";

export default function Lista({ carros }: { carros: Carro[] }) {
  const handleEditCarro = (id: number) => {
    console.log(id);
  };
  const handleDeleteCarro = (id: number) => {
    console.log(id);
  };
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
            <ListItem
              key={carro.id}
              secondaryAction={
                <Box>
                  <IconButton
                    onClick={() => handleEditCarro(carro.id)}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteCarro(carro.id)}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
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
