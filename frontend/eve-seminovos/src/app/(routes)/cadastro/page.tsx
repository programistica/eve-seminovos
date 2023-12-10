"use client";

import React from "react";
import { CarroContext } from "@/app/CarroContextProvider";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemButton,
  Checkbox,
  Divider,
  Modal,
  Paper,
} from "@mui/material";
import fetchCarros from "@/services/fetchCarros";
import Lista from "./_components/lista";
import Formulario from "./_components/formulario";
import Botoes from "./_components/Botoes.1";

export default function Cadastro() {
  const { filter, setFilter, carros, setCarros } =
    React.useContext(CarroContext);

  React.useEffect(() => {
    fetchCarros().then((data) => {
      setCarros(data);
    });
  }, []);
  const [novo, setNovo] = React.useState(false);
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "90vh",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Botoes setNovo={setNovo} />
      <Lista carros={carros} />

      <Formulario aberto={novo} setNovo={setNovo} />
    </Paper>
  );
}
