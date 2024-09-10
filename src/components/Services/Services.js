import React from 'react';
import animation1 from '../../assets/Services/Animation1.png';
import animation2 from '../../assets/Services/Animation2.png';
import animation3 from '../../assets/Services/Animation3.png';
import { ServiveBoxMain, ImgBox, Heading, Paragraph } from './ServiceStyled'
function Services() {
    return (

        <>
            <div className='max-w-screen-2xl font-poppins max-md:w-[90%] max-md:mx-auto'>
                <div className='text-center pt-[131px] max-w-850 m-0 m-auto'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px] '>Main Services</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] max-w-450 m-0 m-auto pt-[11px] max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]'>Learn services to focus on your beauty</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[18px] max-md:text-[14px] max-md:text-[12px]'>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>

                <div className='flex justify-between max-w-1140 m-0 m-auto pt-[86px] 
                max-xl:flex-col max-xl:items-center
                 '>
                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation1} alt='Beauty consultation' />
                        <Heading>Beauty consultation</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>

                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation2} alt='Beauty consultation' />
                        <Heading>Skin treatments</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>

                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation3} alt='Beauty consultation' />
                        <Heading>Beauty product</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>
                </div>
            </div>
        </>
    )
}

export default Services;