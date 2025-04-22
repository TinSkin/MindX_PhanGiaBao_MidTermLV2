import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 py-3 flex items-center justify-between">
      <h1 className="text-4xl text-white font-bold tracking-widest">Anonime</h1>
      <div className="md:hidden">
        <a
          href="#mobile-menu"
          className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            />
          </svg>
        </a>
        <a
          href="#"
          id="mobile-menu-close"
          className="hidden absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.27 16.62a1 1 0 0 1-1.41 1.41L12 13.41l-4.86 4.62a1 1 0 0 1-1.41-1.41L10.59 12 5.97 7.38a1 1 0 0 1 1.41-1.41L12 10.59l4.62-4.86a1 1 0 0 1 1.41 1.41L13.41 12l4.86 4.62Z"
            />
          </svg>
        </a>
      </div>

      <nav
        className="hidden md:flex md:items-center w-full md:w-auto"
        id="mobile-menu"
      >
        <div className="flex flex-col md:flex-row md:space-x-6 pt-4 md:pt-0 border-t border-gray-700 md:border-none">
          <a
            href="#"
            className="text-gray-100 text-lg font-semibold hover:text-white transition-colors tracking-wide py-2 md:py-0 lg:mr-[141px]"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-100 text-lg font-semibold hover:text-white transition-colors tracking-wide py-2 md:py-0"
          >
            List anime
          </a>
        </div>
      </nav>

      <div>
        <input
          type="text"
          placeholder="Search anime or movie"
          className="bg-gray-700 tracking-wide bg-opacity-50 rounded-full px-4 py-2 text-sm text-white font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 md:w-64 transition-all"
        />
      </div>
    </header>
  );
}

export default Header;
