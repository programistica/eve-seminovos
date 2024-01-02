"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Login } from "@mui/icons-material";
import LoginMenu from "./login";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "10vh",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Eve Seminovos
        </Typography>
        <LoginMenu />
      </Toolbar>
    </AppBar>
  );
}
