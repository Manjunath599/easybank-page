import React from "react";


export default function Sidebar() {
    return (
        <div className="font-body h-72 w-[22rem] bg-white shadow-xl absolute top-16 left-10 z-10
        md:w-[28rem] md:left-52">
            <li className="cursor-pointer list-none px-40 py-8">
                <ul>Home</ul>
                <ul className="my-6">About</ul>
                <ul>Contact</ul>
                <ul className="my-6">Blog</ul>
                <ul>Careers</ul>
            </li>
        </div>
    )
}