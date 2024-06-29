
import { hamburger } from '../assets/icons';
import React, { useState } from 'react';
import { navLinks } from '../constants/Const'

// import { MdClose, FiMenu } from 'react-icons'; // Import the hamburger and close icons

function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full hidden max-lg:block">
            <nav className="flex justify-between items-center max-container">
                {/* Hamburger Button */}

                {/* // src={hamburger}
                    // width={25}
                    // height={25}
                    // onClick={toggleMenu}
                    // className="hidden max-lg:bl"
                    // aria-expanded={menuOpen} */}

                <button
                    onClick={toggleMenu}
                    className="show fixed top-5 right-5 hidden max-lg:block"
                    aria-expanded={menuOpen}
                >
                    <img 
                    src={hamburger}
                    alt='Hamburger'
                    width={25}
                    height={25}
                    >

                    </img>
                </button>

                {/* Navigation Links */}
                <ul className= {`menu ${menuOpen ? 'show fixed top-10 right-0 p-4  z-50 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6' : 'hidden'}`}>
                    {menuOpen &&
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat text-light text-slate-gray"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
}

export default Hamburger;
