"use client";
import React from "react";
import { Button } from "@mui/material";

export default function Botoes({
  setNovo,
}: {
  setNovo: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Button
      onClick={setNovo}
      variant="contained"
      color="primary"
      sx={{ margin: "1rem" }}
    >
      Novo
    </Button>
  );
}
