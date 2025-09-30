"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is mounted before rendering (avoids hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // don’t render until mounted

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className=" nav-button-two rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150"
    >
      <Sun className=" text-gray-800 dark:text-gray-200 nav-icon-two" /> 
      {/* {theme === "light" ? "Dark" : "Light"} */}
    </button>
  );
}
