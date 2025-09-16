import type { Metadata } from "next";
import "./globals.css";
import Head from "./components/Head";

export const metadata: Metadata = {
  title: "Alves & Pimentel",
  description: "Advocacia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="light">
      <Head />
      <body className={`antialiased dark:bg-primary-dark bg-primary `}>
        {children}
      </body>
    </html>
  );
}
