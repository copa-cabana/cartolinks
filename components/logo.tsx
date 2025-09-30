"use client";

import { useTheme } from "next-themes";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "dark" ? "/images/kk.png" : "/images/k.png"}
      alt="Logo"
      width={34}
      height={34}
      className="w-6 h-6 margin"
    />
  );
}
