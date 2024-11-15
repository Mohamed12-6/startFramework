import img from"./../../assets/images/avataaars.svg";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center  bg-[#1abc9c] text-white  py-20 mt-[6.5rem]">

            <img src={img} alt="logo" className="w-[250px] mb-6"/>

            <h1 className=" font-bold text-2xl md:text-4xl mb-5 uppercase">
            start Framework
            </h1>

            <div className="icon flex justify-between items-center w-[250px] mb-3">
                <div className="w-[38%] h-[4px] bg-white"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-[38%] h-[4px] bg-white"></div>
            </div>

            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    )
}
