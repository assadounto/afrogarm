import type { Metadata } from "next";
import { Poppins } from '@next/font/google';
import "./globals.css";
import NavBar from "./components/nav/nav";
import MenuTab from "./components/nav/menu_tab";
import HeroSection from "./components/hero/hero";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
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
      <body className={poppins.className}>
        <NavBar/>
        <MenuTab/>
       
        <main className=""> {/* Adjust the padding to match NavBar height */}
          
          {children}
        </main>
        </body>
    </html>
  );
}
