import React, { useState, useEffect } from "react"
import isf from "../assets/ece.png"
import iete from "../assets/iete.png"
import { useLocation } from 'react-router-dom'
import {
    FaInstagram,
    FaGoogle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import stars from "../assets/stars.png";

const Footer = ({ className }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return (
        <div>
            <div className={`max-w-full mx-auto py-32 px-4 flex flex-row flex-wrap justify-around text-gray-300 relative ${className}`}>
                {/* Stars Image */}
                <div className="absolute inset-0 over">
                    <img src={stars} alt="Stars Background" className="w-full h-full object-cover scale-150" />
                </div>
                <div className='text-left max-sm:basis-full max-sm:py-4 z-10'>
                    <h1 className='text-4xl font-bold text-[var(--red)]'>Contact Us</h1>
                    <p className='py-4 font-bold text-xl text-white'>Staff Coordinator</p>
                    <p className='font-mono'>Dr. A. Arulmurugan - 9659341901</p>
                    <p className='font-mono'>Mr. K. Kavin Kumar - 8778544869</p>
                </div>
                <div className='text-left max-sm:basis-full max-sm:py-4 z-10'>
                    <h1 className='text-4xl font-bold text-[var(--red)]'>Venue</h1>
                    <h1 className='text-3xl font-bold text-white py-4'>Maharaja Auditorium</h1>
                    <p className='font-bold text-xl text-white'>Student Coordinator</p>
                    <p className='font-mono'>6381271796 - Cibi Krishna V</p>
                    <p className='font-mono'>9994755088 - Kavyashree V N</p>
                    <p className='font-bold text-1xl text-white'>Transport Co ordinator</p>
                    <p className='font-mono'>9342910364 - Jinisha</p>
                    <p className='font-mono'>8526768789 - Boobathi Raja K M</p>
                    <ul className="py-4">
                        <a href='mailto:ecea.isf.2025@gmail.com' rel="noopener noreferrer " target={"_blank"} >
                            <li className='text-lg'> <FaGoogle size={30} className="inline-block" /><span className="px-2 text-lg">ecea.isf.2025@gmail.com</span></li>
                        </a>
                    </ul>
                </div>
                <div className='text-center max-sm:basis-full'>
                    <p className='py-4 font-bold text-2xl text-[var(--red)]'>ECEA & IETE Forum</p>
                    <div className="flex flex-column justify-center gap-4">
                        <img src={iete} className="my-2 w-[100px] h-[100px] bg-white rounded" alt="beingkecinan" />
                        <img src={isf} className="my-2 w-[150px] h-[100px] bg-white rounded" alt="appatakars" />
                    </div>
                </div>
            </div>

            <div className='max-w-full mx-auto py-16 px-4 text-gray-300 relative bg-navbarBg'>
                <div className='p-4 flex justify-center align-center border border-[#696b78]'>
                    <p className='px-4'>Designed and Developed By</p> <Link to='/dev' className='underline underline-offset-2 text-[var(--red)]'><p>Uruv</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
