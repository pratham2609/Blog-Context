import React, { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { theme } = useContext(ThemeContext);
  const router = useNavigate()
  return (
    <header className={"py-4 h-[70px] w-full flex items-center z-50 mx-auto max-w-screen drop-shadow-md fixed top-0 inset-x-0 " + (theme ? "bg-white shadow-black text-black" : "grad text-white shadow-slate-400")}>
      <div className="px-[200px] w-full h-full flex items-center justify-between">
        <button onClick={()=> router(-1)} className={"border-2 rounded-md px-1.5 py-0.5 " + (theme ? "bg-black text-white" : "")}>
          Back
        </button>
        <h1 className="font-bold text-3xl uppercase text-center">
          Tech Blogs
        </h1>
        <ThemeSwitch />
      </div>
    </header>
  );
}
