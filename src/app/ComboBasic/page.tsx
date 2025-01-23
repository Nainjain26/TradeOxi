import React from "react";
import Globe from "@/components/ui/globe";
import { HiArrowSmRight } from "react-icons/hi";
import ContactForm from "../components/Form";
import Buttons from "../components/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";

const features = [
    "There will be daily 2-4 Signals.",
   " There will be daily 2-4 Signals.",
    "The Risk and Reward Ratio is 1:1.5.",
   " We provide complete support and resistance throughout the day.",
   " We try to maintain a high level of accuracy.",
   " Daily and Weekly newsletter with fundamental market reports.",
   " Daily and weekly research reports via different platforms like SMS, Whatsapp, Skype, Telegram, IMO, Team Viewer, and over the Voice.",

  ];

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
        Basic Forex & Comex Plan

        </span>
        <Globe className="top-16 " />
        <div className="pointer-events-none absolute inset-0 h-full " />
      </div>

      <div className="md:grid grid-cols-2 max-w-7xl mx-auto py-10 gap-5">
        <div>
          <img src="/bf1.svg" alt="" className="" />
        </div>
        <div className="text-gray-700 leading-8 ">
       

          <h1>
          Due to the largest liquidity, Better margin and flexibility, Forex trading has numerous advantages as compared to other markets as there is no such limit to sell currency in short. It&apos;s a 24/5 market.
          </h1>
          <h1 className="py-3">
          Our Live Signals are uniquely designed for the traders who trade in the Forex & Comex market. With the large liquidity and assets, it&apos;s an amazing platform for investors to make money. Online FOREX & COMEX market needs good research and knowledge of the International Market with every important update, as it can affect the whole foreign exchange movement
          </h1>
          <h1>The Comex market involved high risk and higher returns/ big losses. This market requires in-depth technical and fundamental knowledge with proper strategies to cover higher risks.</h1>
          <h1 className="py-3">
          We have a separate team of experienced market experts for proper technical analysis in real time to provide highly accurate recommendations to traders. Our experts use various technical indicators in combination with various studies to predict the live market trends to ensure the maximum return on investment.
          </h1>
          <h1>We provide recommendations in all major currency pairs such as EUR/USD, USD/JPY, GBP/USD, EUR/GBP, and GBP/JPY. We have designed our product keeping in mind all the technicalities of the market to provide the best FOREX trading signals. Our basic package is best for those traders who are trading with a mini lot or less than a mini lot and trade with a small investment. In this pack, we provide support and signals with small targets, good support, and minimum risk. Subscribe to our basic FOREX & COMEX package to take all the below advantages.</h1>
         
        </div>
      </div>
      {/* 2nd */}
      <div className="md:grid grid-cols-2 max-w-7xl mx-auto gap-5 py-10  ">
      <div className="text-gray-800 flex flex-col justify-center relative z-[2]">
      <img
        src="/bf2.jpg"
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
      />
      {features.map((feature, index) => (
        <p key={index} className={`flex items-center ${index % 2 !== 0 ? "py-4" : ""}`}>
          <span className="text-2xl text-green-600 border rounded-full mr-3">
            <HiArrowSmRight />
          </span>
          {feature}
        </p>
      ))}
    </div>

        <div>
          <ContactForm />
        </div>
      </div>
      {/* 3rd */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto gap-5 md:mb-20 mb-5">
        <div className="shadow-lg border rounded-lg md:py-5 md:px-10 p-5 bg-green-50 ">
          <div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="md:text-4xl text-2xl font-bold"
            >
              Quarterly
            </TextAnimate>

            <p className="md:text-3xl text-xl font-semibold py-5">$ 1500</p>
          </div>
          <Buttons href="/Payment" name="Buy Now" />
        </div>
        <div className="shadow-lg border rounded-lg md:py-5 md:px-10 p-5 bg-green-50">
          <div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="md:text-4xl text-2xl font-bold"
            >
              Half Yearly
            </TextAnimate>

            <p className="md:text-3xl text-xl font-semibold py-5">$ 2600</p>
          </div>
          <Buttons href="/Payment" name="Buy Now" />
        </div>
        <div className="shadow-lg border rounded-lg md:py-5 md:px-10 p-5 bg-green-50 ">
          <div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="md:text-4xl text-2xl font-bold"
            >
              Yearly
            </TextAnimate>
            <p className="md:text-3xl text-xl font-semibold py-5">$ 4500</p>
          </div>
          <Buttons href="/Payment" name="Buy Now" />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
