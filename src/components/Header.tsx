// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <header className={`w-full p-4 ${isDarkMode ? "bg-green-900" : "bg-green-800"} text-white`}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          {/* Left Section: Hamburger Menu and Title for Mobile */}
          <div className="flex items-center space-x-2">
            {/* Hamburger Menu */}
            <button
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen && isClient ? "✕" : "☰"}
            </button>

            {/* Title for Mobile */}
            <h1 className="text-xl font-bold md:hidden text-white">
              LGM Radio
            </h1>

            {/* Desktop Logo */}
            <Link href="/" className="hidden md:flex text-white hover:text-gray-200 transition-colors items-center">
              <Image
                src="/icons/icon-48x48.png"
                alt="OnAir2 Radio Logo"
                width={30}
                height={30}
                className="inline mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              Radio
            </Link>
            <Link href="/podcast" className="text-white hover:text-gray-200 transition-colors">
              Podcast
            </Link>
            <Link href="/livestream" className="text-white hover:text-gray-200 transition-colors">
              LiveStream
            </Link>
            <Link href="/chat" className="text-white hover:text-gray-200 transition-colors">
              Chat
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Right Section: Dark Mode Toggle and Timer */}
          <div className="flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="text-white text-xl focus:outline-none">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            {/* <button className="text-white text-2xl focus:outline-none">⏰</button> */}
          </div>
        </div>
      </header>

      {isClient && isMenuOpen && (
        <nav className={`md:hidden w-full ${isDarkMode ? "bg-green-900" : "bg-green-800"} shadow-md p-4 text-white`}>
          <div className="max-w-4xl mx-auto w-full flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/icons/icon-48x48.png"
                alt="LGM Radio"
                width={24}
                height={24}
                className="inline mr-2"
              />
            </Link>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Radio
            </Link>
            <Link
              href="/podcast"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </Link>
            <Link
              href="/livestream"
              className={`text-white hover:text-gray-200 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              LiveStream
            </Link>
            <Link
              href="/chat"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}