import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const [padding, setPadding] = useState(true);

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 30) {
            setPadding(false);
        } else {
            setPadding(true);
        }
    });
    return (
        <>
            <nav className={`p-4 bg-[#2c3e50] fixed top-0 start-0 end-0 z-[90000] transition-all duration-700 ${padding ? "pb-14" : "py-6"}`}>
                <div className="container mx-auto md:flex md:items-center md:justify-between text-white">
                    <div className="flex justify-between items-center">
                        <span>
                            <Link className="text-xl text-white font-bold no-underline md:text-3xl">
                                START FRAMEWORK
                            </Link>
                        </span>
                        <button className="md:hidden ms-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-4 focus:ring-black" onClick={() => {
                        setToggleMenu(!toggleMenu);
                    }}>
                        <i className="fas fa-bars "></i>
                    </button>
                    </div>
                    <div>
                        <ul
                            className={`md:flex md:items-center md:justify-center absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-[#2c3e50] md:bg-transparent md:opacity-100 transition-transform duration-300 ease-in-out ${toggleMenu ? "h-44 block" : "h-0  hidden"
                        }`}
                        >
                            <li className="mx-4 mb-2 ms-0 my-4 md:my-0">
                                <NavLink
                                    to={"about"}
                                    className={
                                        "text-base font-bold text-white no-underline rounded-md p-2"
                                    }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li className="mx-4 mb-2 ms-0 my-4 md:my-0">
                                <NavLink
                                    to={"portfolio"}
                                    className={
                                        "text-base font-bold text-white no-underline rounded-md p-2"
                                    }
                                >
                                    PORTFOLIO
                                </NavLink>
                            </li>
                            <li className="mx-4 mb-2 ms-0 my-4 md:my-0">
                                <NavLink
                                    to={"contact"}
                                    className={
                                        "text-base font-bold text-white no-underline rounded-md p-2"
                                    }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
    
    
}
