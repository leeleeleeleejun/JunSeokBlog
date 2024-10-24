"use client";
import { useState, useEffect } from 'react'

import DarkIcon from "@/assets/DarkIcon.svg";
import LightIcon from "@/assets/LightIcon.svg";
import {useTheme} from "next-themes";

type theme = "dark" | "light";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
