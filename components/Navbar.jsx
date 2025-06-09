
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const toggleTheme = () => {
  const root = document.documentElement;
  const newIsSun = !isSun;

  // Instant change before React re-renders
  if (!newIsSun) {
    root.style.setProperty('--background', '#000000');
    root.style.setProperty('--foreground', '#ffffff');
  } else {
    root.style.setProperty('--background', '#ffffff');
    root.style.setProperty('--foreground', '#000000');
  }

  localStorage.setItem('isSun', newIsSun.toString());
  setisSun(newIsSun);
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSun, setisSun] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('isSun');
    if (storedTheme !== null) {
      setisSun(storedTheme === 'true');
    }
  }, []);

  // Update CSS variables and store theme in localStorage when isSun changes
  useEffect(() => {
    const root = document.documentElement;

    if (!isSun) {
      root.style.setProperty('--background', '#000000');
      root.style.setProperty('--foreground', '#ffffff');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#000000');
    }

    localStorage.setItem('isSun', isSun.toString());
  }, [isSun]);


  return (
    <nav className="bg-gradient-to-r select-none from-white/80 via-white/60 to-white/80 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-blue-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} loading="eager" />
          <span className="ml-2 font-bold text-xl text-blue-700 tracking-wide">Miraj<span className="text-[color:var(--accent)]">.</span> </span>
        </Link>

        {/* Hamburger Icon */}
        <span className='flex justify-center items-center gap-x-2'>
          <span className="text-blue-800 cursor-pointer md:hidden"
            onClick={() => setisSun(!isSun)}>
            {isSun ? (
              // Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.485-8.485h1M3.515 12.515h1m12.728 6.364l-.707.707m-11.314 0l-.707-.707m0-11.314l.707-.707m11.314 0l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </span>
          <button
            className="md:hidden flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-1 w-6 bg-blue-800 transition-all duration-300 mb-1 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 w-6 bg-blue-800 transition-all duration-300 mb-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-6 bg-blue-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </span>

        {/* Nav Links */}
        <ul className={`md:flex md:items-center md:space-x-8 md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block shadow-md md:shadow-none rounded-b-lg`}>
          {[
            { label: 'Home', href: 'home' },
            { label: 'About', href: 'about' },
            { label: 'Contact', href: 'contact' }
          ].map((item) => (
            <li key={item.label} className="mx-4 my-2 md:my-0 text-center">
              <Link
                href={`#${item.href}`}
                onClick={() => setIsOpen(false)} // 👈 close hamburger after click
                className="relative text-blue-800 hover:text-blue-600 font-semibold px-2 py-1
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all 
        after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li
            className="text-blue-800 cursor-pointer hidden md:block"
            onClick={() => setisSun(!isSun)}
          >
            {isSun ? (
              // Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.485-8.485h1M3.515 12.515h1m12.728 6.364l-.707.707m-11.314 0l-.707-.707m0-11.314l.707-.707m11.314 0l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </li>

        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
