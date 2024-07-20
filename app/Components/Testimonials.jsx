import React from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Testimonials = () => {

    const data = [
        {
            name: "Jennifer Anderson",
            desc: " I cant thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended"
        },
        {
            name: "Jennifer Anderson",
            desc: " I cant thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended"
        },
        {
            name: "Jennifer Anderson",
            desc: " I cant thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended"
        },
    ]


  return (
    < div className='w-9/13'> 
        <div className='flex font-bold  align-center justify-center text-2xl m-10 ' > Our Testimonials</div>
        <p className='flex   align-center justify-center p-8 ' >Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>

        
        
        {/* cards */}


       
        <div className='flex  w-[80%] justify-center mx-auto gap-5'>
            {data.map((item,i)=>(
                     <div key={i} className='border  rounded-3xl  bg-[#fafdf2] p-4 w-fit'>
                     <div className='flex-col  '>
                         <span className='text-7xl m-6  font-serif text-green-800'>"</span>
                         <p className=''>{item.desc} </p>
                         <div className='bg-yellow'></div>
                     </div>
                     <div className=' bg-[#f7fbe9]'>    
                         <div className='flex '>
                             <div><CgProfile /></div>
                             <div>{item.name}</div>
                         </div>
                     </div>
     
                 </div>
            ))}
           


        </div>

        <div  className='flex m-6 justify-center align-center '>
                <div  className='font-semibold  justify-center align-center bg-[#f7fbe9] rounded-lg py-2 px-3 ml-3 border'>
                    <GrFormPrevious />
                </div>
               <div className='font-semibold justify-center align-center rounded-lg py-2 px-3 ml-3'>.....</div>
                <div  className='font-semibold  justify-center align-center bg-[#f7fbe9] rounded-lg py-2 px-3 ml-3 border'>
                    <GrFormNext />
                </div>

            </div>

    </div>    
  )
}

export default Testimonials