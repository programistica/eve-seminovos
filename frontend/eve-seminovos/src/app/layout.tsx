import type { Metadata } from "next";
import React from "react";
import Header from "@/components/header/header";
import { Box, Collapse } from "@mui/material";
import { Inter } from "next/font/google";
import Filtros from "@/components/Filtros/filtros";
import CarFilterContextProvider from "./CarFilterContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eve Seminovos",
  description: "Seu carro seminovo com garantia e procedência",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CarFilterContextProvider>
        <body className={inter.className}>
          {" "}
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "10vh" }}
          >
            <Header />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",

                height: "90vh",
              }}
            >
              <Filtros />
              {children}
            </Box>
          </Box>
        </body>
      </CarFilterContextProvider>
    </html>
  );
}
