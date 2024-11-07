import type { Metadata } from "next";
import { Bebas_Neue, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const fontBebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const fontRobotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRobotoCondensed.className} min-h-screen flex flex-col bg-black`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}