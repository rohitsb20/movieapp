"use client";
import { useState,useEffect } from "react";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && (currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer hover:text-rose-600 text-xl"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="cursor-pointer hover:text-rose-600 text-xl"
          onClick={() => setTheme("dark")}
        />
      ))}
    </div>
  );
}
