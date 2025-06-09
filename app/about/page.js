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
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            About Me
          </h1>
          <p className="text-lg mb-6" style={{ color: 'var(--foreground)' }}>
            My Skills
          </p>

          {/* Skills Grid */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'HTML', 'CSS', 'JavaScript', 'Node.js',
              'Express.js', 'MERN Stack', 'Next.js', 'Socket.io',
              'Git & GitHub', 'Video Editing'
            ].map(skill => (
              <li
                key={skill}
                className="skill-card text-white rounded-xl py-2 px-3 font-medium shadow-md transition-transform duration-300"
                style={{ backgroundColor: 'var(--accent)' }}
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
