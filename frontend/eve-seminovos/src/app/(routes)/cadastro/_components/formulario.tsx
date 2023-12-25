"use client";

import React from "react";
import {
  Paper,
  Input,
  Box,
  Button,
  TextField,
  Modal,
  ImageList,
  ImageListItem,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import ClickAwayListener from "@mui/material/ClickAwayListener";

const campos = ["nome", "marca", "ano", "preco", "imagem"];

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

  const [images, setImages] = React.useState<File[]>([]);

  const handleUploadList = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };
  const inputRef = React.useRef<HTMLInputElement>(null);
  const clearUploadList = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
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

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {campos.map((campo) => (
            <TextField
              id="outlined-basic"
              label={campo}
              variant="outlined"
              sx={{ margin: "1rem" }}
              required
            />
          ))}

          <Button
            component="label"
            variant="contained"
            color="primary"
            sx={{ margin: "1rem" }}
            startIcon={<CloudUploadIcon />}
          >
            <VisuallyHiddenInput
              ref={inputRef}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadList}
              required
            />
            Carregar Imagem
          </Button>
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={URL.createObjectURL(item)}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          <Button
            variant="contained"
            color="success"
            sx={{ margin: "1rem" }}
            onClick={() => {}}
          >
            Criar
          </Button>
        </Paper>
      </ClickAwayListener>
    </Modal>
  );
}
