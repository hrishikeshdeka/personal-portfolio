
import React from 'react';

const NavBar = ({ openMobileMenu }) => {

    return (
        <nav className="nav">
            <h3 className="logo">
                hrishikesh's portfolio
            </h3>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={() => openMobileMenu()}>
                    <svg
                        className="mobile-menu"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30" height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M4 6l16 0">
                        </path>
                        <path d="M4 12l16 0">
                        </path>
                        <path d="M4 18l16 0">
                        </path>
                    </svg>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;