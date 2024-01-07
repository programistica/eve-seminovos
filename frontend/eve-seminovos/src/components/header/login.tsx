"use client";

import React from "react";
import {
  TextField,
  Modal,
  Button,
  Box,
  Link,
  Paper,
  ClickAwayListener,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Cadastrar from "./cadastrar";
export default function LoginMenu() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
  const [cadastrar, setCadastrar] = React.useState(false);
  const handleCadastrar = () => setCadastrar(!cadastrar);

  const [newUsuario, setNewUsuario] = React.useState({
    nome: "",
    usuario: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUsuario({ ...newUsuario, [name]: value });
    console.log(newUsuario);
  };

  return (
    <Box>
      {
        <Button color="inherit" onClick={handleClick}>
          Login
        </Button>
      }

      <Modal
        sx={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
      >
        <ClickAwayListener onClickAway={handleClick}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                width: "100%",
              }}
            >
              <IconButton onClick={handleClick}>
                <CloseIcon />
              </IconButton>
            </Box>
            {cadastrar ? (
              <Cadastrar
                onChange={handleChange}
                nome={newUsuario.nome}
                usuario={newUsuario.usuario}
                senha={newUsuario.senha}
              />
            ) : (
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
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {cadastrar ? (
                <>
                  <Button
                    onClick={handleCadastrar}
                    sx={{
                      mt: 1,
                    }}
                  >
                    Voltar
                  </Button>
                  <Button
                    sx={{
                      mt: 1,
                    }}
                  >
                    Enviar
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    sx={{
                      mt: 1,
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={handleCadastrar}
                    sx={{
                      mt: 1,
                    }}
                  >
                    Cadastrar
                  </Button>
                </>
              )}
            </Box>
          </Paper>
        </ClickAwayListener>
      </Modal>
    </Box>
  );
}
