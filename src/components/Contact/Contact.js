import React from 'react';
import contact_img from '../../assets/Contact/Contact_ Animations.png';
import './Contact.css'
function Contact() {
    return (
        <>
            <div className="max-w-screen-2xl font-poppins flex justify-between pt-[144px] pl-[150px] pr-[150px]">
                <div className='pt-[252px]'>
                    <img src={contact_img} alt='abc'></img>
                </div>


                <div className='w-[45.5%]'>
                    <h5 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] '>Contact Us</h5>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] w-[71%] pt-[12px]'>Send your inquiry to our expert team</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[19px]'>Lorem ipsum dolor sit amet nulla turapis tellus.</p>

                    <form className='pt-[49px]'>
                        <div className='flex justify-between'>
                            <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="First name"></input>
                            <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="Last name"></input>
                        </div>

                        <div className='pt-[40px]'>
                            <input className='w-[100%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="email" placeholder='Email address'></input>
                        </div>

                        <div className='pt-[39px]'>
                            <input className='w-[100%] h-[62px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder='Subject message'></input>
                        </div>

                        <div className='pt-[38px]'>
                            <textarea className="w-[100%] h-[239px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px] pt-[26px]" type="text" placeholder="Your inquiry here"></textarea>
                        </div>
                    </form>

                    <div className='pt-[49px]'>
                        <button className='w-[48%] h-[58px] bg-[#ff64ae] text-[#ffffff] text-[16px] font-semibold leading-[24px] tracking-[1.8px] text-center rounded-full border-none pb-[3px] font-poppins'>Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;