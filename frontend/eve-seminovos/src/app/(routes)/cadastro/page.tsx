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
} from "@mui/material";
import fetchCarros from "@/services/fetchCarros";
import Lista from "./_components/lista";

export default function Cadastro() {
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
      <Lista carros={carros} />
    </Box>
  );
}
