"use client";

import DarkIcon from "@/assets/DarkIcon.svg";
import LightIcon from "@/assets/LightIcon.svg";
import {useTheme} from "next-themes";

type theme = "dark" | "light";

export default function ThemeToggle() {

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme


  return (
    <button
      onClick={() => {
        setTheme( currentTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {currentTheme === "light" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}
