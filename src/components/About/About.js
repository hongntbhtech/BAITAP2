import React from 'react';
import play from '../../assets/About/Play_button.png';
import imgAbout from '../../assets/About/imgAbout.png';
function About() {
    return (
        <>
            <div className='max-w-screen-2xl font-poppins flex pt-[135px] pl-[150px] pr-[145px] 
            max-xxl:w-[80%] max-xxl:p-0 max-xxl:mx-auto
            max-xl:w-[80%] max-xl:flex-col max-xl:items-center
             2xl:w-[80%] 2xl:mx-auto
            '>
                <div className='w-[80%] max-xl:text-center'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px] max-sm:text-[14px]'>About Us</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] whitespace-nowrap max-md:text-[33px] max-md:whitespace-normal max-sm:text-[30px]'>We are the best beauty clinic</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-480 pt-[19px] max-xl:max-w-none max-ssm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-480 pt-[25px] max-xl:max-w-none max-ssm:text-[14px]'>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                    <div className='flex pt-[53px] max-xl:justify-center max-md:block'>
                        <div className='about-btn-learnmore'>
                            <button className='w-[200px] h-[57px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-[#ffffff] tracking-[1.7px] font-medium font-poppins 
                             max-ssm:w-[150px] max-ssm:h-[45px] max-ssm:text-[14px]
                             max-sssm:w-[130px] max-sssm:h-[40px] max-sssm:text-[12px]
                             max-sm:text-[12px]
                            '>Learn More</button>
                        </div>
                        <div className='flex pl-[40px] max-md:justify-center max-md:pl-0 max-md:pt-[20px] '>
                            <img className='' src={play} alt='abc'></img>
                            <p className='text-[16px] font-semibold leading-[24px] text-[#8b8b8b] tracking-[1.6px] whitespace-nowrap pl-[10px] pt-[16px]  max-md:whitespace-normal max-sm:text-[12px]'>Watch Video</p>
                        </div>
                    </div>
                </div>

                <div className='w-full max-md:w-none'>
                    <img className='min-w-624 -mt-[30px] ml-[59px] object-cover
                    max-xxl:m-0 max-xl:m-0
                    max-xl:m-0 max-xl:m-auto
                    max-md:min-w-0
                    ' src={imgAbout} alt='abc'></img>
                </div>
            </div>

        </>
    )
}

export default About;