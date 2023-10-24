import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import "./Nav.css"
import { ThemeContext } from "../../context/ThemeContext";
import ThemeSwitch from "../ThemeSwitch";
export default function Nav() {
    const { theme } = React.useContext(ThemeContext)
    return (
        <Navbar shouldHideOnScroll className={"px-[200px] " + (theme ? "" : 'text-white grad')}>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className={theme ? "text-black" : "text-white"} href="/allBlogs">
                        All Blogs
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" className={theme ? "text-black" : "text-white"}>
                        Add a Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={theme ? "text-black" : "text-white"} href="#">
                        Review
                    </Link>
                </NavbarItem>
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
