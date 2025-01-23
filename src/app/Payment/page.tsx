import Globe from "@/components/ui/globe";
import Link from "next/link";
import React from "react";
import ContactForm from "../components/Form";
import { IoCall } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
          Payment Methods
        </span>
        <Globe className="top-16 " />
        <div className="pointer-events-none absolute inset-0 h-full " />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-10   ">
        <div>
          <Link href={"/"}>
            <img src="/Mastercard.png" alt="" />
          </Link>
        </div>
        <div>
          <Link href={"/"}>
            <img src="/PayPal.png" alt="" />
          </Link>
        </div>
        <div>
          <Link href={"/"}>
            <img src="/Skrill.png" alt="" />
          </Link>
        </div>
        <div>
          <Link href={"/"}>
            <img src="/Stripe.png" alt="" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:py-20  py-5 ">
        <div className="text-center md:py-10 py-20">
          <h1 className="md:text-5xl font-semibold text-2xl">
            Do not hesitate to{" "}
            <span className="text-green-700">reach out.</span>
          </h1>
          <p className="text-gray-600 pt-3">
            Just fill the contact form here and we&apos;ll be sure to reply as fast
            as possible
          </p>
        </div>

        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center relative z-[2]">
            <img
              src="/bf2.jpg"
              alt="Decorative background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 z-[1]"
            />
            <h1 className="md:text-3xl text-xl font-semibold">
              Business submissions
            </h1>
            <p className="text-gray-600 pt-3 pb-5 md:text-xl ">
              For business plan submissions. Please submit using this
            </p>
            <div className="flex pt-5 text-gray-600 ">
              <p className="p-2 shadow-xl bg-green-200 mr-3 text-green-700 rounded-full md:text-xl">
                <IoCall />
              </p>
              <p className=" md:text-xl  ">+91 123-456-789</p>
            </div>
            <div className="flex pt-5 text-gray-600 ">
              <p className="p-2 shadow-xl bg-green-200 mr-3 text-green-700 rounded-full md:text-xl">
                <IoIosMailUnread />
              </p>
              <p className=" md:text-xl  ">tradeoxi@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
