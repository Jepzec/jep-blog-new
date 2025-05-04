import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jpzc Blog",
  description:
    "A simple blog built with hopes, pray, tears, faith, cry a lot, and nextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="container mx-auto flex-grow  ">{children}</main>
        <footer className="bg-white border-t border-gray-200 py-4 sm:py-6">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm sm:text-base">
            <p>
              © {new Date().getFullYear()} Jepzec Auto-car. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
