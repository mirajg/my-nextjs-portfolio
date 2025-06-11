'use client'

import React from 'react';

const AboutPage = () => {
  return (
    <>
      {/* Global CSS Variables */}
      <style jsx global>{`
        .skill-card:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* Main Container */}
      <div
        id="about"
        className="flex items-center justify-center px-4 py-12"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div
          className="max-w-3xl w-full shadow-lg rounded-2xl p-8 text-center transition-all duration-300"
          style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            My <span className="text-purple-400">Skills</span>
          </h2>


          {/* Skills Grid */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {[
              'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'MERN Stack',
              'Next.js', 'Socket.io', 'Git & GitHub', 'Video Editing', 'REST API', 'More'
            ].map(skill => (
              <li
                key={skill}
                className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl py-2 px-4 text-center font-semibold shadow-lg flex justify-center items-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
