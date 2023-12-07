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
  const response = await fetch("http://127.0.0.1:5000/carros");
  const data = (await response.json()) as Carro[];
  return data;
}
