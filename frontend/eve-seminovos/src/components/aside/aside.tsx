"use client";

import React from "react";

import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function Aside() {
  const [openMarca, setOpenMarca] = React.useState(true);

  const handleClickMarca = () => {
    setOpenMarca(!openMarca);
  };

  return (
    <List
      component={"nav"}
      subheader={
        <ListSubheader component={"div"} id="nested-list-subheader">
          Utilize os filtros para aprimorar a busca
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickMarca}>
        <ListItemText primary="Marca" />
        {openMarca ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="modelo" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Ano" />
      </ListItemButton>
    </List>
  );
}
