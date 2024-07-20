import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaFacebookF, FaTwitter , FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='  justify-center bg-[#eff0f6] p-20'>
       <div className='flex gap-40 '>

             {/* Logo */}
            <div className=' p-12'>
                <CgProfile className='text-8xl'/>
                <p className='text-xl'>Lorem ipsum dolor sit amet</p>
                <p className='text-xl'>consectetur adipiscing elit aliquam</p>

                <div className='flex mt-6 gap-8 text-[#006231]'>
                    <FaFacebookF /> <FaTwitter /> <RiInstagramFill /><FaLinkedinIn /> <FaYoutube />
                </div>
            </div>

        <div className=' flex gap-16'>









            <div >
                <div className='flex font-bold text-[#170f49]'>Product</div>
                <div className='flex flex-col text-[#6f6c90]'>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Reviews</p>
                    <p>Updates</p>
                </div>
            </div>
            <div>
                <div className='flex font-bold text-[#170f49]'>Company</div>
                <div className='flex flex-col text-[#6f6c90]'>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                    <p>Culture</p>
                    <p>Blog</p>
                </div>
            </div>
            <div>
                <div className='flex font-bold text-[#170f49]'>Support</div>
                <div className='flex flex-col text-[#6f6c90]'>
                    <p>Getting started</p>
                    <p>Help center</p>
                    <p>Server status</p>
                    <p>Report a bug</p>
                    <p>Chat support</p>
                </div>
            </div>
            <div>
                <div className='flex font-bold text-[#170f49]'>Contact Us</div>
                <div className='flex flex-col text-[#6f6c90]'>
                    <p> contact@company.com</p>
                    <p>(414) 687 5892</p>
                    <p>794 Mcallister St</p>
                    <p>San Francisco, 94102</p>
                </div>
            </div>
   

















        </div>


       </div>
       <div className='bg-[#4d4d4d] h-1'></div>

       <div className='flex justify-between'>
        <div className='text-[#6f6c90]'>Copyright © 2022 Company</div>
        <div className='text-[#6f6c90]'>All Rights Reserved | <span className='text-[#006231]' > Terms and Conditions</span> | <span className='text-[#006231]' > Privacy Policy</span></div>
       </div>

    </div>
  )
}

export default Footer