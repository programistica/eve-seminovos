"use client";

import React from "react";
import { TextField, Modal, Button, Box, Link } from "@mui/material";

export default function Cadastrar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        margin="normal"
        type="text"
      >
        Usuario
      </TextField>
      <TextField
        id="outlined-basic"
        label="Senha"
        variant="outlined"
        margin="normal"
        type="password"
      >
        Senha
      </TextField>
      <Link
        sx={{ mt: 1 }}
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Esqueceu a senha?
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></Box>
    </Box>
  );
}
