import React, { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeContext } from "../context/ThemeContext";
export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={"py-4 h-[70px] flex items-center justify-center z-50 mx-auto max-w-screen drop-shadow-md w-full fixed top-0 inset-x-0 " + (theme ? "bg-white shadow-black text-black" : "grad text-white shadow-slate-400")}>
      <h1 className="font-bold text-3xl uppercase text-center">
        Tech Blogs
      </h1>
      <div className="absolute h-full right-24">
        <ThemeSwitch />
      </div>
    </header>
  );
}
