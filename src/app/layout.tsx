import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VeriMint — Токенизация IP-активов на Solana",
  description: "Веб-платформа для верификации правообладателей, токенизации IP-активов и их размещения на маркетплейсе с расчётами в Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
