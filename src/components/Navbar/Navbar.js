import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Navbar/mainLogo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const navItems = [
        { to: '/', text: 'Home+' },
        { to: '/about', text: 'About' },
        { to: '/service', text: 'Service' },
        { to: '/gallery', text: 'Gallery' },
        { to: '/blog', text: 'Blog' },
        { to: '/contact', text: 'Contact', type: 'button' },
    ];

    return (
        <nav className="max-w-screen-2xl w-full font-poppins">
            <div className="flex justify-between py-10 px-4">
                {/* Logo */}
                <div className='pl-[130px]'>
                    <img src={logo} alt='Logo' />
                </div>

                {/* Menu Icon */}
                <div className='md:hidden cursor-pointer' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaAlignJustify />}
                </div>

                <ul className='flex list-none pt-5 w-[60.2%] -m-px'>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={`nav-item ${item.to === '/' ? 'w-[13%]' : ''}`}
                        >
                            {item.type === 'button' ? (
                                <button className="py-3.5 px-10 rounded-full bg-[#FF64AE] border-0 text-white text-base tracking-[1.6px] font-semibold font-poppins -mt-[15px] ml-[30px]" onClick={closeMobileMenu}>
                                    {item.text}
                                </button>
                            ) : (
                                <Link to={item.to} className="no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] p-[22.7px]" onClick={closeMobileMenu}>
                                    {item.text}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
