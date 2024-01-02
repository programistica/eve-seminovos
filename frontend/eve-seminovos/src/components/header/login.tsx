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
} from "@mui/material";

export default function LoginMenu() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

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
          >
            <Button
              sx={{
                mt: 1,
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                mt: 1,
              }}
            >
              Cadastrar
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}
