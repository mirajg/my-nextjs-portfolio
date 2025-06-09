
'use client'; // make this a client component

import React, { useState } from 'react';
import { formSubmit } from '../actions/formSubmit';

const SendMeMessage = () => {
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    const response = await formSubmit(formData);

    setIsLoading(false);

    if (response.success) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--background)]">
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          boxShadow: '0 12px 30px rgba(250, 200, 120, 0.25)',
          borderRadius: '1.25rem',
          padding: '2.5rem 2rem',
          maxWidth: '28rem',
          width: '100%',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          className="text-3xl font-extrabold text-center mb-8"
          style={{ color: 'var(--accent)' }}
        >
          Send Me a Message
        </h2>

        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          disabled={isLoading}
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          disabled={isLoading}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
          className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          disabled={isLoading}
        />
        <textarea
          placeholder="Say Something"
          required
          name="message"
          className="w-full mb-6 px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 resize-none h-36 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          disabled={isLoading}
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 rounded-xl font-semibold shadow-lg transition ${isLoading
            ? 'cursor-not-allowed bg-gray-400 text-gray-700'
            : 'cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
            }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default SendMeMessage;
