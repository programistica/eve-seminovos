import React from "react";
import { Button } from "@mui/material";

export default function Botoes({
  setNovo,
}: {
  setNovo: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setNovo((estado) => !estado);
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      sx={{ margin: "1rem" }}
    >
      Novo
    </Button>
  );
}
