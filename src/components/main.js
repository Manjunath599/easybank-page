import React from "react";


export default function Main() {
    return (
        <>
            <section className="z-10 font-body">
                <div className="bg-[#fafafa] lg:flex lg:flex-row-reverse lg:justify-between">
                    <div className="bg-cover bg-no-repeat lg:bg-contain lg:ml-20"
                        style={{
                            backgroundImage: `url(./images/bg-intro-mobile.svg)`
                        }}
                    >
                        <img className="z-10 lg:h-[45rem]" src="./images/image-mockups.png" alt="Mobile" />
                    </div>
                    <div className="text-center p-10 lg:w-[26rem] lg:text-left lg:ml-28 lg:mt-24">
                        <h1 className="text-4xl font-semibold">Next generation digital banking</h1>
                        <p className="my-6">Take your financial life online. Your Easybank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more.</p>
                        <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white
             px-8 py-[10px] rounded-3xl">Request invite</button>
                    </div>
                </div>
            </section>
            <section className="text-center bg-[#f3f4f6] lg:text-left font-body" >
                <h1 className="text-2xl font-semibold pt-16 px-32">
                    Why choose Easybank?</h1>
                <p className="px-20 py-8 lg:pl-32 lg:w-[48rem] lg:py-4">We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before. </p>
                <div className="text-center lg:flex">
                    <div className="flex flex-col items-center lg:text-left mt-8">
                        <img className="h-16 w-16 lg:mr-44" src="./images/icon-online.svg" />
                        <h2 className="my-6 text-2xl lg:mr-16">Online Banking</h2>
                        <p className="px-20">
                            Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-8 lg:text-left">
                        <img className="h-16 w-16 lg:mr-40" src="./images/icon-budgeting.svg" />
                        <h2 className="my-6 text-2xl lg:mr-6">Simple Budgeting</h2>
                        <p className="px-20">
                            See exactly where your money goes each month. Receive notifications when you’re
                            close to hitting your limits.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-8 lg:text-left">
                        <img className="h-16 w-16 lg:mr-40" src="./images/icon-onboarding.svg" />
                        <h2 className="my-6 text-2xl lg:mr-12">Fast Onboarding</h2>
                        <p className="px-20">
                            We don’t do branches. Open your account in minutes online and start taking control
                            of your finances right away.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-8 lg:text-left">
                        <img className="h-16 w-16 lg:mr-48" src="./images/icon-api.svg" />
                        <h2 className="my-6 text-2xl lg:mr-36">Open API</h2>
                        <p className="px-20">
                            Manage your savings, investments, pension, and much more from one account. Tracking
                            your money has never been easier.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}