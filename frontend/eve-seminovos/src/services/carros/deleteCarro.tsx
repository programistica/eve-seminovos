"use client";

import DeleteCarro from "@/interfaces/carros/deleteCarro";

export default async function deleteCarro(id: number): Promise<DeleteCarro> {
  const response = await fetch(`http://localhost:5000/carros/delete/${id}`, {
    method: "DELETE",
  });

  switch (response.status) {
    case 200:
      const data = (await response.json()) as DeleteCarro;
      return data;
    case 404:
      throw new Error("Carro não encontrado");
    default:
      throw new Error("Erro desconhecido");
  }
}
