"use client";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";

export default function ModeToogle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {/* {theme == "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] " />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] " />
        )} */}
      <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <MoonIcon className=" absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle mode</span>
    </Button>
  );
}
