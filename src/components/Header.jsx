import React from "react";
export default function Header() {
  return (
    <header className="py-4 h-[70px] flex items-center justify-center border-b-2 border-b-gray-300 drop-shadow-md w-full fixed top-0 inset-x-0 bg-white">
      <h1 className="font-bold text-3xl uppercase text-center">
        Tech Blogs
      </h1>
    </header>
  );
}
