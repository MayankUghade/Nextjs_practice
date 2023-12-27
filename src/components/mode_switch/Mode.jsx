"use client";
import { useTheme } from "next-themes";
import { DarkMode } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState, useEffect } from "react";

const Mode = () => {
  const [isDark, setIsDark] = useState(true);
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    {
      theme === "dark" ? setIsDark(true) : setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    toggleDarkMode();
  };

  return (
    <button onClick={handleThemeToggle}>
      {isDark ? (
        <div className="flex border-2 border-white rounded-lg gap-2 p-1">
          <LightModeIcon />
        </div>
      ) : (
        <div className="flex border-2 border-black rounded-lg gap-2 p-1">
          <DarkMode />
        </div>
      )}
    </button>
  );
};

export default Mode;
