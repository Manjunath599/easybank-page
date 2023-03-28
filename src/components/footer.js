import React from "react";


export default function Footer() {
    return (
        <footer className="bg-[#2d314d] bg-cover text-center text-white p-8 font-body
        lg:flex lg:justify-between">
            <div className="ml-24 md:ml-72 lg:ml-24">
                <img className="bg-white my-8" src="./images/logo.svg" alt="logo" />
                <div className="flex ">
                    <img src="./images/icon-facebook.svg" alt="fb" />
                    <img className="mx-4" src="./images/icon-youtube.svg" alt="YT" />
                    <img src="./images/icon-twitter.svg" alt="twitter" />
                    <img className="mx-4" src="./images/icon-pinterest.svg" alt="pin" />
                    <img src="./images/icon-instagram.svg" alt="insta" />
                </div>
            </div>

            <div className="py-8 lg:flex">
                <ul >
                    <li>About Us</li>
                    <li className="my-3">Conatct</li>
                    <li className="mb-3">Blog</li>
                </ul>
                <ul className="lg:ml-20">
                    <li>Carrers</li>
                    <li className="my-3">Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="lg:mr-20">
                <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white
             px-8 py-[10px] rounded-3xl">Request invite</button>
                <p className="my-3">© Easybank. All Rights Reserved</p>
            </div>
        </footer>
    )
}