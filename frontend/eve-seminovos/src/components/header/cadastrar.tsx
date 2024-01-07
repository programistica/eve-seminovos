"use client";

import React from "react";
import { TextField, Modal, Button, Box, Link } from "@mui/material";

export default function Cadastrar({
  onChange,
  nome,
  usuario,
  senha,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nome: string;
  usuario: string;
  senha: string;
}) {
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
        name="nome"
        value={nome}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="normal"
        type="text"
        onChange={onChange}
      >
        Nome
      </TextField>
      <TextField
        name="usuario"
        value={usuario}
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        margin="normal"
        type="text"
        onChange={onChange}
      >
        Usuario
      </TextField>
      <TextField
        name="senha"
        value={senha}
        id="outlined-basic"
        label="Senha"
        variant="outlined"
        margin="normal"
        type="password"
        onChange={onChange}
      >
        Senha
      </TextField>

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
