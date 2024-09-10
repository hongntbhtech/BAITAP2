import React from 'react';
import footer_logo from '../../assets/Footer/Footer_Logo.png';

import footer_bg from '../../assets/Footer/Footer_BG.png';
import bg_bottom from '../../assets/Footer/Bottom_BG.png';

import vector from '../../assets/Footer/arrow-up.png';

import contact1 from '../../assets/Footer/facebook-f.png';
import contact2 from '../../assets/Footer/Vector.png';
import contact3 from '../../assets/Footer/linkedin-in.png';
import contact4 from '../../assets/Footer/youtube.png';
import contact5 from '../../assets/Footer/Vector_1.png';

import { List, List1 } from './FooterStyled'


function Footer() {
    return (
        <>
            <footer className='font-poppins relative'>
                <div className='pt-[69px]'>
                    <div className="relative  h-[705.34px] bg-no-repeat"
                      style={{ backgroundImage: `url(${footer_bg})` }}>
                        <div className='max-w-screen-2xl flex justify-between pt-[242px] w-[79.2%] mx-auto max-xl:w-[85%] 
                        max-lg:flex-wrap max-lg:pt-[100px] max-lg:w-[70%] '>
                            <div className='footer-1 max-lg:w-full max-lg:text-center'>
                                <img className='max-lg:m-0 max-lg:m-auto' src={footer_logo} alt='abc'></img>
                                <p className='text-[16px] font-semibold leading-[24px] tracking-[1.6px] text-[#d7dbff] indent-[32px] pt-[33px]'>
                                    Beautice <span className='p-children' style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '1.6px', fontWeight: 400 }}>
                                        is a Beauty Clinic WordPress Theme.
                                    </span>
                                </p>
                                <p className='text-[14px] font-medium italic leading-[21px] tracking-[1.6px] text-[#d7dbff] indent-[31px] pt-[23px]'>Baker Steet 101, NY, United States.</p>
                                <div className='flex mt-1 max-lg:justify-center'>
                                    <p className='text-[14px] font-medium italic leading-[21px] tracking-[1.6px] text-[#d7dbff] indent-[31px]'>+521 569 8966.</p>
                                    <p className='text-[14px] font-medium italic leading-[21px] tracking-[1.6px] text-[#d7dbff] indent-[31px] pl-[10px]'>mail@company.com.</p>
                                </div>
                            </div>

        
                            <div className='w-[13.4%] -mt-[14px] max-lg:pt-[50px] max-lg:w-[30%] max-lg:mx-auto' >
                                <h3 className='text-[18px] font-semibold leading-[27px] tracking-[1.8px] text-white'>Pages</h3>
                                <ul className='pt-[20px]'>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Home</List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>About</List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Services</List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Gallery</List>
                                    <List className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Team</List>
                                </ul>
                            </div>

                            <div className='max-lg:pt-[50px]'>
                                <h3 className='text-[18px] font-semibold leading-[27px] tracking-[1.8px] text-white -mt-[16px] -ml-[2px]'>Informations</h3>
                                <ul className='pt-[22px]' >
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Terms & conditions</List1>
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Privacy policy</List1>
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Blog</List1>
                                    <List1 className='text-[16px] font-normal tracking-[1.8px] text-[#d7dbff] list-none'>Contact</List1>
                                </ul>
                            </div>
    

                        </div>

                        <div className='w-[95.5%] flex justify-end fixed bottom-[170px]'>
                            <a href='http://localhost:3000/'>
                                <div className='w-[36px] h-[36px] bg-[#ff64ae] rounded-[5px] flex justify-center items-center'>
                                    <img src={vector} alt='abc'></img>
                                </div>
                            </a>
                        </div>

                        <div className='max-w-screen-2xl flex justify-between w-[79.2%] mx-auto pt-[138px]
                        max-xl:w-[85%] max-lg:pt-[80px]
                        '>
                            <div className='flex gap-[45px] max-lg:gap-[25px] '>
                                <img src={contact1} alt='abc'></img>
                                <img src={contact2} alt='abc'></img>
                                <img src={contact3} alt='abc'></img>
                                <img src={contact4} alt='abc'></img>
                                <img src={contact5} alt='abc'></img>
                            </div>


                            <div className="leading-[24px] tracking-[1.6px] text-[#d7dbff] -mt-[2px]">
                                <p>© AltDesain Studio 2021 - All right reserved.</p>
                            </div>
                        </div>

                    </div>
                    <div className="absolute bg-no-repeat w-full h-[125px] bottom-0 left-0 -z-10"
                    style={{ backgroundImage: `url(${bg_bottom})` }}>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;