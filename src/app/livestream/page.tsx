// src/app/livestream/page.tsx
"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BottomNav from "../../components/BottomNav";
import { FaYoutube } from "react-icons/fa";

export default function Livestream() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // YouTube channel URL
  const youtubeChannelUrl = "https://www.youtube.com/@lattergloryministries3882";

  // Example: Embed a specific video or livestream from the channel
  // Replace with a livestream video ID if available (e.g., from a scheduled livestream)
  // For now, we'll use a placeholder video ID or a specific video from the channel
  const videoId = "BlXCX1rz9Wo"; // Example video ID from Glory Marie Ministries (from web ID: 9)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0`;

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      {/* Header Component */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex-1">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Join Our Livestream</h1>
          <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            Watch live sermons, worship sessions, and more on our YouTube channel!
          </p>
        </div>

        {/* YouTube Embed */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={embedUrl}
              title="YouTube Livestream"
              className="w-full h-full rounded-lg shadow-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaYoutube className="mr-2 text-xl" />
            Watch More on YouTube
          </a>
        </div>
      </div>

      {/* Footer Component */}
      <Footer isDarkMode={isDarkMode} />

      {/* Bottom Navigation Menu (Mobile Only) */}
      <BottomNav isDarkMode={isDarkMode} />
    </div>
  );
}