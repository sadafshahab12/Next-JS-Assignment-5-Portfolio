import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
 



const poppins = Poppins({
  weight: ['400', '600'], // You can specify multiple weights
  subsets: ['latin'], // Specify the character subset
  display: 'swap', // Font display strategy
});


export const metadata: Metadata = {
  title: "Sadaf Shahab",
  description: "I created my portfolio with Next JS, Tailwind CSS.It includes Font Awesome Icon, Cards, profile cards ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} `}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
