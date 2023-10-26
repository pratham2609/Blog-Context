import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import "./Nav.css"
import { ThemeContext } from "../../context/ThemeContext";
import ThemeSwitch from "../ThemeSwitch";
export default function Nav() {
    const { theme } = React.useContext(ThemeContext)
    return (
        <Navbar shouldHideOnScroll className={"px-[200px] absolute " + (theme ? "" : 'text-white grad')}>
            <NavbarBrand>
                <p className="font-bold text-inherit text-2xl ">The Blogger</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/allBlogs" className={"line " + (theme ? "text-black black" : "text-white white")}>
                        All Blogs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className={"line " + (theme ? "text-black black" : "text-white white")}>
                        Add a Blog
                    </Link>
                </NavbarItem>
                {/* <NavbarItem>
                    <Link href="#" className={"line " + (theme ? "text-black black" : "text-white white")}>
                        Review
                    </Link>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="">
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className={theme ? "text-black" : "text-white"}>Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} href="#" className={theme ? "text-black" : "text-white"} variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
