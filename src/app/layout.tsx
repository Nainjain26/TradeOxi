
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WpButton from "./components/Whatsaap";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeOxi",
  description: "Tradeoxi empowers stock market enthusiasts with trading strategies, market insights, analytics, and tools for smarter investment decisions globally.It includes features like :- Forex Trading ,Investment Advisor, Forex signals, gold signals ,risk Management , forex trading , investment advisor, Currency Trading , currency trading , trading platform , stock market account , forex exchange, Gold Signals , Risk Management, forex signals , Forex Exchange",
  //   icons: {
  //   icon: '/favicon.ico',
  // },

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
        
        <Navbar/>
        <WpButton/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
