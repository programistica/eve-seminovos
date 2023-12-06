import type { Metadata } from "next";
import Header from "@/components/header/header";
import { Box, Collapse } from "@mui/material";
import { Inter } from "next/font/google";
import Aside from "@/components/Filtros/filtros";

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
            <Aside />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
