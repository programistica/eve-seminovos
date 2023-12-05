import type { Metadata } from "next";
import Header from "@/components/header/header";
import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "@/components/aside/aside";

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
        <Header />
        <Aside />
        {children}
      </body>
    </html>
  );
}
