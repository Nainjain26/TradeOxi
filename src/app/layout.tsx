
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
  title: "TradeOxi | Forex, Gold & Investment Insights",
  description:
    "TradeOxi empowers traders with expert forex trading signals, gold insights, investment strategies, and real-time market analytics. Access powerful tools for smarter global trading decisions.",
  keywords: [
    "forex trading",
    "investment advisor",
    "forex signals",
    "gold signals",
    "risk management",
    "currency trading",
    "trading platform",
    "stock market account",
    "forex exchange",
    "global trading insights",
    "smart investment tools"
  ],
  openGraph: {
    title: "TradeOxi | Forex, Gold & Investment Insights",
    description:
      "TradeOxi delivers reliable forex signals, risk management tools, and expert investment strategies for smarter, global stock and forex trading.",
    url: "https://www.tradeoxi.com",
    siteName: "TradeOxi",
    images: [
      {
        url: "f3.jpg", 
        width: 1200,
        height: 630,
        alt: "TradeOxi Trading Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

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
