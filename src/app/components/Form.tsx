"use client"; // Ensure this is at the top for client-side rendering

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    phoneNumber: '', 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('https://adminbackend-iypc.onrender.com/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify(formData), // Convert to JSON string
    });

    if (!response.ok) {
      throw new Error('Failed to submit the form');
    }

    const result = await response.json();
    alert(`Form submitted successfully: ${result.message}`);
    setFormData({
    name: '',
    email: '',
    comment: '',
    phoneNumber: '', 
    });
    
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md scale-90"> {/* scale-90 reduces the size by 10% */}
      <h1 className="md:text-4xl text-2xl font-bold text-green-600 mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Your phone number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            min="1000000000" // Example for minimum phoneNumber number length
            max="9999999999" // Example for maximum phoneNumber number length
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none" // Added appearance-none to remove the spinner
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Your message</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
            rows={4}
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div >
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
</div>
);
}
