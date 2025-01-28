import React from "react";
import Globe from "@/components/ui/globe";
import { HiArrowSmRight } from "react-icons/hi";
import ContactForm from "../components/Form";
import Buttons from "../components/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";

const features = [
    "There will be daily 2-4 Signals.",
    "We maintain a high level of accuracy.",
    "The Risk-to-Reward Ratio is 1:1.5",
    "All Recommendations are based on technical analysis.",
    "Support and resistance levels for all major currencies are provided daily.",
    "Updates on all major events and data impacting the currency market are provided.",
    "Complete follow-ups on recommendations and open positions are provided.",
    "Daily and weekly newsletters with fundamental market reports are provided.",
    "Daily and weekly research reports are delivered via different platforms such as SMS, WhatsApp, Skype, Telegram, IMO, Team Viewer, and voice calls.",
  ];

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
        Premium Forex Plan
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
          Our Premium Forex pack is specifically designed for traders dealing in standard lots who seek high targets. This service provides tips for all currency pairs with the highest PIP margins and the lowest possible risk. Our premium signals offer high accuracy and significant targets. Our research analysts conduct in-depth research and combine it with their techniques to generate signals.
          </h1>
          <h1 className="py-3">
          We have carefully designed our product while considering all the technicalities of the market. We study price volatility, chart patterns, and fundamental aspects to formulate intraday trading signals, recommendations, and advice for major currency pairs such as EUR/USD, USD/JPY, GBP/USD, EUR/GBP, GBP/JPY, EUR/CHF, and others.
          </h1>
         
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

            <p className="md:text-3xl text-xl font-semibold py-5">$ 1850</p>
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

            <p className="md:text-3xl text-xl font-semibold py-5">$ 3150</p>
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
            <p className="md:text-3xl text-xl font-semibold py-5">$ 5950</p>
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
