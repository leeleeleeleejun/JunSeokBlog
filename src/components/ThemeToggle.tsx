"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DarkIcon from "@/assets/DarkIcon.svg";
import LightIcon from "@/assets/LightIcon.svg";

type theme = "dark" | "light";

function Click(state: theme, setState: Dispatch<SetStateAction<theme>>) {
  if (state === "dark") {
    localStorage.theme = "light";
    setState("light");
  } else {
    localStorage.theme = "dark";
    setState("dark");
  }
}

export default function ThemeToggle() {
  const [state, setState] = useState<theme>("light");
  useEffect(() => {
    setState(localStorage.theme);
  }, []);
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state]);

  return (
    <button
      onClick={() => {
        Click(state, setState);
      }}
    >
      {state === "light" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}
