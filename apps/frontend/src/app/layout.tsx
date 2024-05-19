import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citier",
  description: "Your guide to travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + 'm-auto max-w-screen-md p-10'}>
        {children}
      </body>
    </html>
  );
}
