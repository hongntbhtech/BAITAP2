import React from 'react';
import actor1 from '../../assets/Proteams/unsplash_pTrhfmj2jDA.png';
import actor2 from '../../assets/Proteams/unsplash_FVh_yqLR9eA.png';
import actor3 from '../../assets/Proteams/unsplash_mEZ3PoFGs_k.png';
import icon1 from '../../assets/Proteams/Twitter.png';
import icon2 from '../../assets/Proteams/Facebook.png';
import icon3 from '../../assets/Proteams/Instagram.png';
import { ProteamsBoxMain, ImgBox, Heading,Heading1, Para, SocialMedia, SocialMedia1} from './ProteamsStyled'
function Proteams(){
    return(
        <>
            <div className='max-w-screen-2xl font-poppins max-md:w-[90%] max-md:mx-auto
             2xl:w-[80%] 2xl:mx-auto
            '>
                <div className='text-center pt-[71px] max-w-850 m-0 m-auto'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px]'>Professional Teams</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]'>The Professional expert</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px] max-md:text-[14px] max-md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className='flex justify-between max-w-1085 m-0 m-auto pt-[114px]
                 max-xl:flex-col max-xl:items-center
                '>
                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-424px rounded-[42px]'>
                        <ImgBox src={actor1} alt='abc'></ImgBox>
                        <Heading>Surgeon</Heading>
                        <Heading1>Briyan Nevalli</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media'>
                            <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                        </SocialMedia>
                    </ProteamsBoxMain>

                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-424px rounded-[42px]'>
                        <ImgBox src={actor2} alt='abc'></ImgBox>
                        <Heading>Dermatologist</Heading>
                        <Heading1>Bella sebastian</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media'>
                            <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                        </SocialMedia>
                    </ProteamsBoxMain>

                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-424px rounded-[42px]'>
                        <ImgBox src={actor3} alt='abc'></ImgBox>
                        <Heading>Stylist expert</Heading>
                        <Heading1>Lilly Adams</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media-right'>
                            <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                        </SocialMedia>
                    </ProteamsBoxMain>
                </div>
            </div>
        </>
    )
}

export default Proteams;