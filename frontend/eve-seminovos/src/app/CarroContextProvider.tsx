import React, { useState, createContext } from "react";

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

export const CarroContext = createContext<{
  filter: Filter | undefined;
  setFilter: React.Dispatch<React.SetStateAction<Filter | undefined>>;
  carros: Carro[];
  setCarros: React.Dispatch<React.SetStateAction<Carro[]>>;
}>({
  filter: undefined,
  setFilter: () => {},
  carros: [],
  setCarros: () => {},
});

export default function CarroContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState<Filter>();
  const [carros, setCarros] = useState<Carro[]>([]);

  return (
    <CarroContext.Provider value={{ filter, setFilter, carros, setCarros }}>
      {children}
    </CarroContext.Provider>
  );
}
