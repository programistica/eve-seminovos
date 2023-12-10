"use client";

import React from "react";
import { Paper, Input, Box, Button, Modal } from "@mui/material";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import ClickAwayListener from "@mui/material/ClickAwayListener";

const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  top: 20,
  width: 1,
});

export default function Formulario({
  aberto,
  setNovo,
}: {
  aberto: boolean;
  setNovo: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClickAway = () => {
    setNovo(false);
  };
  return (
    <Modal
      open={aberto}
      onClose={() => {}}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100wh",
        height: "100vh",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "60%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Input sx={{ margin: "1rem" }} placeholder="Nome" />
            <Input sx={{ margin: "1rem" }} placeholder="Marca" />
          </Box>
          <Box>
            <Input sx={{ margin: "1rem" }} placeholder="Ano" />
            <Input sx={{ margin: "1rem" }} placeholder="Preço" />
          </Box>
          <Box>
            <Button
              component="label"
              variant="contained"
              color="primary"
              sx={{ margin: "1rem" }}
              startIcon={<CloudUploadIcon />}
            >
              <VisuallyHiddenInput
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              Carregar Imagem
            </Button>
          </Box>
        </Paper>
      </ClickAwayListener>
    </Modal>
  );
}
