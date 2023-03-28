import React, { useState } from "react";
import Sidebar from "./sidebar";


export default function Navbar() {
    const [menu, setMenu] = useState(false)

    return (
        <nav className="flex lg:justify-around p-4 justify-between font-body">
            <img className="h-6" src="./images/logo.svg" alt="logo" />
            <li className="lg:flex cursor-pointer hidden">
                <ul>Home</ul>
                <ul className="mx-6">About</ul>
                <ul>Contact</ul>
                <ul className="mx-6">Blog</ul>
                <ul>Careers</ul>
            </li>
            <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white
             px-8 py-[10px] rounded-3xl hidden lg:block">Request invite</button>
            <img className="h-5 lg:hidden cursor-pointer"
                onClick={() => setMenu(!menu)}
                src={`${menu ? './images/icon-close.svg' : './images/icon-hamburger.svg'}`} alt="menu" />
            {menu && <Sidebar />}

        </nav>
    )
}