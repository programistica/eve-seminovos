"use client";

import React from "react";

interface Carro {
  id: number;
  nome: string;
  marca: string;
  ano: number;
  preco: number;
  img: string;
}

interface Filter {
  marca: string[];
  ano: number[];
}

const [filter, setFilter] = React.useState<Filter>();
const [carros, setCarros] = React.useState<Carro[]>([]);
export const CarroContext = React.createContext({
  filter,
  setFilter,
  carros,
  setCarros,
});

export default function CarroContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CarroContext.Provider value={{ filter, setFilter, carros, setCarros }}>
      {children}
    </CarroContext.Provider>
  );
}
