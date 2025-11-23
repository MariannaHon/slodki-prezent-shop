import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";

import type { Metadata } from "next";

import { Open_Sans, Inter, Poppins, Roboto, Merriweather, Playfair_Display } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  style: ["normal","italic"],
  display: "swap",
});
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  display: "swap"
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400","500","600","700"], 
  display: "swap" 
});

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400","500","700"], 
  display: "swap" 
});

const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ["400","700"], 
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400","700"], 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Słodki Prezent",
  description: "Sweet presents for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${inter.className} ${poppins.className} ${roboto.className} ${merriweather.className} ${playfair.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
