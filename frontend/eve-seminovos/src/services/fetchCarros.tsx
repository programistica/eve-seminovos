"use client";

interface Carro {
  id: number;
  nome: string;
  marca: string;
  ano: number;
  preco: number;
  img: string;
}

export default async function fetchCarros(): Promise<Carro[]> {
  const response = await fetch("http://localhost:5000/carros/todos");
  const data = (await response.json()) as Carro[];
  return data;
}
