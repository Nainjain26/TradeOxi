"use client"
import { useState } from "react";
import emailjs from "emailjs-com";

const PopupForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_c32at21",      // Replace with actual EmailJS service ID
        "template_vf60zz8",     // Replace with your EmailJS template ID
        formData,
        "KP8IlES_XSU58eHV8"     // Replace with your EmailJS public key (user ID)
      );

      setSuccessMessage("🎉 Form submitted successfully!");
      setFormData({ name: "", number: "", email: "", country: "" });
      
      setTimeout(() => {
        setSuccessMessage("");
        onClose(); // Close after delay
      }, 2500);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Error sending the form. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100 hover:scale-105">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition-colors focus:outline-none"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Let&apos;s Get Started
        </h2>
        
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-center font-medium shadow">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-semibold text-gray-700">
              Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm transition-all"
              placeholder="Number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent shadow-sm transition-all"
              placeholder="Enter your country"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;