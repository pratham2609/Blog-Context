import React from "react";
import Header from "../Header";
import Pagination from "../Pagination";
import ill1 from "../../assets/1768089.webp";
import ill2 from "../..//assets/mind.png";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export default function BlogLayout({ children }) {
    const location = useLocation();
    const { theme } = React.useContext(ThemeContext);
    return (
        <div className={"h-screen w-screen flex pt-[80px] items-center justify-center " + (!location.pathname.includes('blog') ? "pb-[60px] " : "pb-[20px] ") + (theme ? "bg-white text-black" : "grad text-white")}>
            <Header />
            <div className={"h-full overflow-y-auto flex items-center justify-center w-full "}>
                {children}
            </div>
            <div className="h-full fixed flex items-center left-0 justify-center">
                <img src={ill1} className="w-full animate-bounce" alt="Illustration" />
            </div>
            <div className="h-full flex fixed items-center justify-center  right-10">
                <img src={ill2} alt="Illustration" className="animate-bounce1" />
            </div>
            <Pagination />
        </div>
    );
}
