import React from "react";
import Globe from "@/components/ui/globe";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { TextAnimate } from "@/components/ui/text-animate";
import ContactForm from "../components/Form";

const page = () => {
  return (
    <div className="container mx-auto px-3">
      <div  className="relative  flex size-full mx-auto max-w-7xl items-center justify-center overflow-hidden rounded-lg  bg-background  pb-36 pt-8  ">
        <span className="pointer-events-none  bg-black bg-clip-text text-center md:text-5xl text-3xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10 ">
          Contact Us
        </span>
        <Globe className="top-16 " />
        <div className="pointer-events-none absolute inset-0 h-full " />
      </div>
      <div className="relative max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5 bg-gradient-to-br from-gray-50 via-white to-gray-200 rounded-lg shadow-lg">
  {/* Animated Heading Section */}
  <div className="flex flex-col justify-center space-y-4">
    <TextAnimate
      animation="blurInUp"
      by="character"
      className="text-green-600 md:text-xl text-lg font-medium"
    >
      - Contact us with ease
    </TextAnimate>
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Get In <span className="text-green-600">Touch</span>
    </h1>
    <TextAnimate
      animation="blurInUp"
      by="word"
      className="text-gray-600 md:text-lg text-base"
    >
      Stay connected—drop us a message, and we’ll get back shortly.
    </TextAnimate>
    {/* Decorative underline */}
    <div className="w-24 h-1 bg-green-600 rounded-full"></div>
  </div>

  {/* Contact Form Section */}
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-lg -z-10 animate-pulse"></div>
    <ContactForm />
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-12 px-4 md:px-8">
  {[
    {
      icon: <FaLocationDot />,
      title: "Main Address",
      description: "Omega Tower, Indore",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <MdAddLocationAlt />,
      title: "UK Address",
      description: "Omega Tower, Indore",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <IoMdMailUnread />,
      title: "Email Address",
      description: "support@tradeoxi.com",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaLocationDot />,
      title: "Phone Number",
      description: "+44 7411532008",
      color: "from-orange-400 to-orange-600",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col justify-center items-center gap-5 border md:py-10 py-6 px-4 shadow-lg rounded-xl bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div
        className={`p-4 md:p-6 rounded-full shadow-md bg-gradient-to-r ${item.color} text-white text-4xl`}
      >
        {item.icon}
      </div>
      <div className="text-center">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-2xl font-semibold text-gray-800"
        >
          {item.title}
        </TextAnimate>
        <p className="text-gray-600 mt-2">{item.description}</p>
      </div>
    </div>
  ))}
</div>


      <div className="mb-10 max-w-7xl mx-auto">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.436067656793!2d75.88817547533618!3d22.749192826474903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5630da7d0f%3A0x7b927144557e6b25!2sOmega%20Tower%2C%20Ware%20House%20Rd%2C%20Mechanic%20Nagar%2C%20Badi%20Bhamori%2C%20Indore%2C%20Madhya%20Pradesh%20452002!5e0!3m2!1sen!2sin!4v1737035306041!5m2!1sen!2sin"
  className="w-full h-[350px]"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  );
};

export default page;
