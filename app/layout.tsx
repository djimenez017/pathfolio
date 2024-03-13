import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className=" text-white h-full">
      <body className="flex flex-row h-full ${inter.className}">
        <Navigation />
        <div className="w-4/5 overflow-auto">{children}</div>
      </body>
    </html>
  );
}
