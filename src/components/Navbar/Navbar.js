import { FaAlignJustify, FaTimes } from 'react-icons/fa';
// import logo from '../../assets/Navbar/mainLogo.png';
import React, { useState } from 'react';

function Navbar() {

    const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(prevClick => !prevClick);


    return (
        <>
            <navbar className=" max-w-screen-2xl font-poppins flex justify-between items-center w-[79.8%] mx-auto pt-[42px] max-xl:w-[83%]
            2xl:w-[80%]
            ">


                <div className=''>
                    {/* <img className='w-16' src={logo} alt='Logo' /> */}
                    <img className="max-lg:w-[80%] max-md:w-[90%] max-sssm:w-full" src='../../assets/Navbar/mainLogo.png' alt="..."></img>
                </div>

                <div
                    className={`md:static absolute md:min-h-fit min-h-[350px] left-0 top-[20%] md:w-auto w-full flex items-center -mt-[13px] pr-5 pl-[158px] max-xxl:p-0 max-lg:-mt-[6px] max-md:justify-center max-md:items-center max-md:bg-black ${click ? 'block' : 'hidden'} md:block
                        max-sssm:top-[15%]
                    `}
                >
                    <ul onClick={() => setClick(false)} className='flex justify-between md:flex-row flex-col md:items-center md:gap-[45.2px] gap-8 max-xl:gap-[25px] max-lg:gap-[18px] max-md:flex-col max-md: min-w-[100px] max-md:justify-center max-md:items-center  '>
                        <li className="max-md:border-b max-md:border-gray-300 max-md:pb-2">
                            <a className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] whitespace-nowrap max-lg:text-sm' href="/home">Home +</a>
                        </li>
                        <li className="max-md:border-b max-md:border-gray-300 max-md:pb-2">
                            <a className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] -ml-[6px] max-lg:text-sm' href="/about">About</a>
                        </li>
                        <li className="max-md:border-b max-md:border-gray-300 max-md:pb-2">
                            <a className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] max-lg:text-sm' href="/service">Service</a>
                        </li>
                        <li className="max-md:border-b max-md:border-gray-300 max-md:pb-2">
                            <a className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] max-lg:text-sm' href="/gallery">Gallery</a>
                        </li>
                        <li className="max-md:border-b max-md:border-gray-300 max-md:pb-2">
                            <a className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] max-lg:text-sm' href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>

                <div className='-mt-[13px] pr-[5px] max-lg:pl-[15px] max-lg:-mt-[6px] flex'>
                    <button className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold max-lg:text-sm max-lg:py-2.5 max-lg:px-6 max-md:py-0.5 max-md:px-3
                    max-sssm:text-[12px]
                    '>Contact</button>
                    <div className='text-base mt-[5px] md:hidden max-md:block ml-3 cursor-pointer ' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaAlignJustify />}
                    </div>

                </div>
            </navbar>
        </>
    );
}

export default Navbar;
