import React, { useState } from "react";
import data from "./data"


export default function Articles() {
    const [article, setArticle] = useState(data)

    return (
        <div className="bg-[#fafafa] mb-14 font-body">
            <h1 className="text-center pt-16 text-3xl font-medium lg:text-left lg:ml-20">Latest Articles</h1>
            <div className="flex flex-col items-center -mt-16 lg:flex-row lg:ml-14">
                {
                    article.map(({ id, name, info, img, heading }) => {
                        return (
                            <div key={id} className="p-6 my-20 h-[27rem] w-[24rem] lg:w-[21rem]">
                                <img className="rounded-t-lg" src={img} alt="img" />
                                <div className="bg-white  p-10 rounded-b-lg lg:p-4 lg:h-60">
                                    <span className="text-sm ">{name}</span>
                                    <h2 className="text-2xl my-3 font-medium cursor-pointer 
                                     hover:text-[#31d35c] ">{heading}</h2>
                                    <p>{info}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}