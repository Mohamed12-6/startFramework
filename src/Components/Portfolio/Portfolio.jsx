
import { useState } from "react";
import img1 from "./../../assets/images/poert1.png";
import img2 from "./../../assets/images/port2.png";
import img3 from "./../../assets/images/port3.png";



export default function Portfolio() {
    const [image, setimage] = useState(null);



    function openImag(img) {
        setimage(img.currentTarget.childNodes[0].src)
    }


    return (
        <div className="flex justify-center  items-center flex-col p-5 mt-[6.5rem]">

            <h1 className=" font-bold text-2xl md:text-4xl mb-5 uppercase">
                portfolio component
            </h1>

            <div className="icon flex justify-between items-center w-[250px] mb-3">
                <div className="w-[38%] h-[4px] bg-[#2c3e50]"></div>
                <i className="fa-solid fa-star text-[#2c3e50]"></i>
                <div className="w-[38%] h-[4px] bg-[#2c3e50]"></div>
            </div>

            <section className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  items-start">

                <div className=" relative cursor-pointer " onClick={openImag}>
                    <img src={img1} alt="image one" className=" w-full rounded-md" />
                    <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>


                <div className=" relative cursor-pointer " onClick={openImag}>
                    <img src={img2} alt="image one" className=" w-full rounded-md" />
                    <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                <div className=" relative cursor-pointer " onClick={openImag}>
                    <img src={img3} alt="image one" className=" w-full rounded-md" />
                    <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                <div className=" relative cursor-pointer " onClick={openImag}>
                    <img src={img1} alt="image one" className=" w-full rounded-md" />
                    <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                <div className=" relative cursor-pointer " onClick={openImag}>
                    <img src={img2} alt="image one" className=" w-full rounded-md" />
                    <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
                <div className=" relative cursor-pointer " onClick={openImag}>
                    <img src={img3} alt="image one" className=" w-full rounded-md" />
                    <div className="absolute  top-0 bottom-0 right-0 left-0 bg-[#1abc9c]  rounded-md opacity-0 hover:opacity-85 transition-all duration-500 flex items-center justify-center">
                        <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </section>

            <div className={`modal fixed top-0 left-0  bottom-0 right-0 bg-[#0d6df440] z-[999]  justify-center items-center ${image ? "flex" : "hidden"}`}
                onClick={(event) => {
                    if (event.target == event.currentTarget) setimage(null);
                }}>

                <img src={image} alt="opened image" className="max-w-[500px]" />
            </div>
        </div>
    )
}
