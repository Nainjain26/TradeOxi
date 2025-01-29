"use client";
import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { Chart } from "react-google-charts";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { FaAngleRight } from "react-icons/fa6";

export const data = [
  ["Country", "Popularity"],

  ["United States", 600],
  ["Canada", 200],
  ["America", 300],
  ["India", 700],
];
const options = {
  backgroundColor: "transparent",
  datalessRegionColor: "#f5f5f5",
  defaultColor: "#76c7c0",
};

const Footer = () => {
  return (
    <div className="bg-green-800 container mx-auto  md:py-10 py-5 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 max-w-7xl mx-auto">
        {/* first */}
        <div className="">
          <h1 className="md:text-3xl text-2xl font-semibold text-white">
            Trade-Oxi
          </h1>
          <div className="flex pt-5 ">
            <p className="p-2 shadow-xl bg-green-200 mr-3 text-green-700 rounded-full md:text-xl">
              <IoCall />
            </p>
            <p className="text-white md:text-xl  ">+44 7411 532008</p>
          </div>
          <div className="flex pt-2 ">
            <p className="p-2 shadow-xl bg-green-200 mr-3 text-green-700 rounded-full md:text-xl">
              <IoIosMailUnread />
            </p>
            <p className="text-white md:text-xl  ">support@tradeoxi.com</p>
          </div>
        </div>

        {/* add */}
        <div>
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="md:text-3xl text-2xl font-semibold text-white"
          >
            Quick Links
          </TextAnimate>
          <div className="flex pt-5 ">
            <p className="p-2  mr-2 text-white  md:text-xl">
              <FaAngleRight />
            </p>
            <Link
              href={"/Privacy-policy"}
              className="text-white md:text-xl hover:text-green-200 "
            >
              privacy-policy
            </Link>
          </div>
          <div className="flex pt-3 ">
            <p className="p-2  mr-2 text-white  md:text-xl">
              <FaAngleRight />
            </p>
            <Link
              href={"/Refund-policy"}
              className="text-white md:text-xl hover:text-green-200 "
            >
              Refund-policy
            </Link>
          </div>
          <div className="flex pt-3 ">
            <p className="p-2  mr-2 text-white  md:text-xl">
              <FaAngleRight />
            </p>
            <Link
              href={"/Terms-conditions"}
              className="text-white md:text-xl hover:text-green-200 "
            >
              Terms & conditions
            </Link>
          </div>
        </div>
        {/* second */}
        <div>
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="md:text-3xl text-2xl font-semibold text-white"
          >
            Where to find us..?
          </TextAnimate>
          <div>
            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper?.getChart();
                    const selection = chart?.getSelection();
                    if (!selection || selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected: " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="90%"
              height="50%"
              data={data}
              options={options}
            />
          </div>
        </div>
        {/* 3rd */}
        <div>
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="md:text-3xl text-2xl font-semibold text-white"
          >
            Get in touch
          </TextAnimate>

          <p className=" text-white pt-3 ">
            Get in touch with us in our social media platforms.
          </p>
          <div className=" flex gap-3 mt-5">
            <Link
              href={"/"}
              className="p-2 shadow-xl bg-green-200 text-green-700 rounded-full md:text-xl transition-all duration-300 hover:bg-green-50"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"/"}
              className="p-2 shadow-xl bg-green-200 text-green-700 rounded-full md:text-xl transition-all duration-300 hover:bg-green-50"
            >
              <LuFacebook />
            </Link>
            <Link
              href={"/"}
              className="p-2 shadow-xl bg-green-200 text-green-700 rounded-full md:text-xl transition-all duration-300 hover:bg-green-50"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>

      <TextAnimate
        animation="blurInUp"
        by="character"
        className=" text-center text-gray-200 mt-10"
      >
        All rights reserved by TradeOxi || Copyright &copy; 2025 .
      </TextAnimate>
    </div>
  );
};

export default Footer;
