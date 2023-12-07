"use client";

import React from "react";

export const filterContext = React.createContext({});

export default function CarFilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filter, setFilter] = React.useState({
    marca: [],
    ano: [],
  });

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      {children}
    </filterContext.Provider>
  );
}
