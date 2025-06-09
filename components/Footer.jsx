import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex items-center justify-center gap-6 py-4 px-4 text-center text-[color:var(--background)] bg-[color:var(--foreground)] transition-colors duration-300"
    >
      {/* Copyright Text */}
      <p className="text-sm sm:text-base font-medium tracking-wide">
        &copy; {currentYear} <span className="font-semibold">Miraj Gautam</span>. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex gap-8 items-center">
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@fosocrif"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 text-red-600 hover:text-red-500 transition-colors"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.789-42.15-48.451-48.451C465.051 64 288 64 288 64s-177.051 0-213.204 11.632c-23.662 6.301-42.17 24.801-48.451 48.451C15.713 160.261 15.713 256 15.713 256s0 95.739 10.632 131.917c6.281 23.65 24.789 42.15 48.451 48.451C110.949 448 288 448 288 448s177.051 0 213.204-11.632c23.662-6.301 42.17-24.801 48.451-48.451C560.287 351.739 560.287 256 560.287 256s0-95.739-10.632-131.917zM232 336V176l142 80-142 80z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mirajg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10  text-[color:var(--background)] transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12a12.005 12.005 0 008.205 11.387c.6.111.82-.261.82-.578v-2.234c-3.338.724-4.042-1.614-4.042-1.614-.547-1.387-1.335-1.756-1.335-1.756-1.091-.746.083-.73.083-.73 1.206.084 1.841 1.236 1.841 1.236 1.072 1.835 2.809 1.305 3.495.998.107-.775.42-1.305.763-1.605-2.665-.305-5.466-1.337-5.466-5.942 0-1.312.468-2.384 1.235-3.222-.124-.304-.535-1.526.117-3.18 0 0 1.007-.322 3.3 1.23a11.48 11.48 0 013.006-.403 11.49 11.49 0 013.006.403c2.292-1.552 3.297-1.23 3.297-1.23.653 1.654.242 2.876.118 3.18.77.838 1.233 1.91 1.233 3.222 0 4.615-2.804 5.633-5.475 5.932.43.37.823 1.103.823 2.222v3.293c0 .32.218.694.825.576A12.006 12.006 0 0024 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
