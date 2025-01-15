import React from "react";
import Search from "@/components/Search";
import Header from "@/components/Header";
import { ThemeProvider as Provider } from "next-themes";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie rating app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider
          attribute="class"
          defaultTheme="system"
          
        >
          <div className="h-16 px-4">
            <Header />
          </div>
          <div className="my-4"><Navbar/></div>
          <div><Search/></div>
          <div className="h-[calc(100vh-64px)] px-4">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
