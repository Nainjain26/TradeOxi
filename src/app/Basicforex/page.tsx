import React from "react";
import Globe from "@/components/ui/globe";
import { HiArrowSmRight } from "react-icons/hi";
import ContactForm from "../components/Form";
import Buttons from "../components/Buttons";
import { TextAnimate } from "@/components/ui/text-animate";

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
          Basic Forex Plan
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
            Forex trading offers numerous advantages over other markets due to
            its largest liquidity, better margin, and flexibility. There are no
            limits to selling currency short in Forex, making it a 24/5 market.
          </h1>
          <h1 className="py-3">
            Our Live Forex Signals are uniquely designed for traders in the
            Forex market. With its vast liquidity and assets, Forex presents an
            amazing platform for investors to profit. Successful trading in the
            online Forex market requires thorough research and knowledge of
            international markets, including every important update that can
            impact foreign exchange movements.
          </h1>
          <h1>
            We provide recommendations in all major currency pairs such as
            EUR/USD, USD/JPY, GBP/USD, EUR/GBP, and GBP/JPY. Our product is
            designed with a deep understanding of market technicalities to
            provide the best Forex trading signals. Our basic package is ideal
            for traders dealing with mini lots or smaller investments. This
            package includes support, profitable Forex signals with small
            targets, strong support, and minimal risk.
          </h1>
        </div>
      </div>
      {/* 2nd */}
      <div className="md:grid grid-cols-2 max-w-7xl mx-auto gap-5 py-10  ">
        <div className="text-gray-800 flex flex-col justify-center  relative z-[2]  ">
          <img
            src="/bf2.jpg"
            alt="Decorative background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
          />
          <p className=" flex items-center">
            <span className="text-2xl text-green-600 border rounded-full mr-3">
              <HiArrowSmRight />
            </span>
            There will be 2-4 signals provided daily.
          </p>
          <p className=" flex items-center py-4">
            <span className="text-2xl text-green-600 border rounded-full mr-3">
              <HiArrowSmRight />
            </span>
            The Risk-to-Reward ratio is 1:1.5.
          </p>
          <p className=" flex items-center">
            <span className="text-2xl text-green-600 border rounded-full mr-3">
              <HiArrowSmRight />
            </span>
            We provide comprehensive support and resistance levels throughout
            the day.
          </p>
          <p className=" flex items-center py-4">
            <span className="text-2xl text-green-600 border rounded-full mr-3">
              <HiArrowSmRight />
            </span>
            We strive to maintain a high level of accuracy.
          </p>
          <p className=" flex items-center">
            <span className="text-2xl text-green-600 border rounded-full mr-3">
              <HiArrowSmRight />
            </span>
            Daily and weekly newsletters with fundamental market reports.
          </p>
          <p className=" flex items-center py-4">
            <span className="text-2xl text-green-600 border rounded-full mr-3">
              <HiArrowSmRight />
            </span>
            Daily and weekly research reports are available via different
            platforms such as SMS, WhatsApp, Skype, Telegram, IMO, Team Viewer,
            and voice calls.
          </p>
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

            <p className="md:text-3xl text-xl font-semibold py-5">$ 650</p>
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

            <p className="md:text-3xl text-xl font-semibold py-5">$ 1100</p>
          </div>
          <Buttons  href="/Payment" name="Buy Now" />
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
            <p className="md:text-3xl text-xl font-semibold py-5">$ 1900</p>
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
