import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend assignment",
  description: "Frontend assignment for Blue Window ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
