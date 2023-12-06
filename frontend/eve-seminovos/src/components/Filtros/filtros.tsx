"use client";

import React from "react";

import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function Filtros() {
  const marcas = ["Toyota", "Honda", "Hyundai"];
  const modelos = ["Corolla", "Civic", "HB20"];
  const anos = ["2021", "2020", "2019"];

  const [openMarca, setOpenMarca] = React.useState(true);
  const [openModelo, setOpenModelo] = React.useState(true);
  const [openAno, setOpenAno] = React.useState(true);

  const handleClickMarca = () => {
    setOpenMarca(!openMarca);
  };
  const handleClickModelo = () => {
    setOpenModelo(!openModelo);
  };
  const handleClickAno = () => {
    setOpenAno(!openAno);
  };

  const filtros = [
    {
      categoria: "Marca",
      opcoes: marcas,
      open: openMarca,
      handle: handleClickMarca,
    },
    {
      categoria: "Modelo",
      opcoes: modelos,
      open: openModelo,
      handle: handleClickModelo,
    },
    { categoria: "Ano", opcoes: anos, open: openAno, handle: handleClickAno },
  ];
  return (
    <List
      sx={{ width: "20%", bgcolor: "background.paper" }}
      component={"nav"}
      subheader={
        <ListSubheader component={"div"} id="nested-list-subheader">
          Utilize os filtros para busca
        </ListSubheader>
      }
    >
      {filtros.map((filtro) => (
        <>
          <ListItemButton key={filtro.categoria} onClick={filtro.handle}>
            <ListItemText primary={filtro.categoria} />
            {filtro.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={filtro.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {filtro.opcoes.map((opcao) => (
                <ListItemButton key={opcao} sx={{ pl: 4 }}>
                  <FormControlLabel control={<Checkbox />} label={opcao} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
}
