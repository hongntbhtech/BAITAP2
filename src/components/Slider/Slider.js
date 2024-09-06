import React from 'react';
import slider_img from '../../assets/Slider/frame1.png';


function Slider() {
    return (

        <>
            <div className='max-w-screen-2xl font-poppins flex justify-between pt-[105px] pl-[145px]'>
                <div className='pt-[60px] pb-[60px] pl-[43px] w-2/3'>
                    <h1 className="font-semibold text-[#091156] text-[48px] leading-[60px]">
                        Clinic & beauty consultant
                    </h1>


                    <p className='text-[16px] font-medium leading-[24px] tracking-[1.65px] text-[#091156]  pl-px pt-2'>
      It is a long established fact that a reader will be by the readable content of a page.
    </p>

                    <div className='pt-[34px]'>
                        <button className='w-[200px] h-[58.36px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-white tracking-[1.6px] font-semibold pl-[10px] pb-[2px] font-poppins pl-[2px]'>More Details</button>
                    </div>
                </div>

                <div className=' w-full pt-1 pl-[13px]'>
                    <img src={slider_img} alt='Logo' />
                </div>
            </div>

            <div className='flex justify-center items-center pt-[136px]'>
                <div className="w-[14.82px] h-[3.09px] bg-[#EEEEEE] rounded-[50px] mr-[5px]"></div>
                <div className="w-[25.31px] h-[8.15px] bg-[#414880] rounded-[50px]"></div>
                <div className="w-[14.82px] h-[3.09px] bg-[#EEEEEE] rounded-[50px] ml-[5px]"></div>
            </div>
        </>
    )
}

export default Slider;