// src/components/BottomNav.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaVideo } from "react-icons/fa";

interface BottomNavProps {
  isDarkMode: boolean;
}

export default function BottomNav({ isDarkMode }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav className={`md:hidden w-full p-2 ${isDarkMode ? "bg-green-900" : "bg-green-800"} fixed bottom-0 flex justify-around items-center shadow-t-lg`}>
      <Link
        href="/"
        className={`text-center transition-colors ${
          pathname === "/" ? "text-white" : "text-white hover:text-pink-200"
        }`}
      >
        <span className="text-xl block">🏠</span>
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/podcast"
        className={`text-center transition-colors ${
          pathname === "/podcast" ? "text-white" : "text-white hover:text-pink-200"
        }`}
      >
        <span className="text-xl block">🎙️</span>
        <span className="text-xs">Podcast</span>
      </Link>
     

      <Link href="/livestream" className={`flex flex-col items-center ${isDarkMode ? "text-gray-300" : "text-white"} hover:text-blue-600`}>
          <FaVideo className="text-xl" />
          <span className="text-xs">Livestream</span>
        </Link>
      
      <Link
        href="/contact"
        className={`text-center transition-colors ${
          pathname === "/contact" ? "text-white" : "text-white hover:text-white"
        }`}
      >
        <span className="text-xl block">👤</span>
        <span className="text-xs">Contact Us</span>
      </Link>
    </nav>
  );
}