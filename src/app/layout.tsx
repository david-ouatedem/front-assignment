import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../assets/css/globals.css";
import IMAGES from "@/assets/images";

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
      <Head>
        <link rel="preload" href={IMAGES.grosvenor} as="image" />
        <link rel="preload" href={IMAGES.hajper} as="image" />
        <link rel="preload" href={IMAGES.happysins} as="image" />
        <link
          rel="preload"
          href="../assets/fonts/Montserrat-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../assets/fonts/Montserrat-Black.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../assets/fonts/Montserrat-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../assets/fonts/Montserrat-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../assets/fonts/Montserrat-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
