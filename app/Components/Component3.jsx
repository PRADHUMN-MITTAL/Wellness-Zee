import React from 'react'

const Component3 = () => {
  return (
    <div className='flex sm:flex-col lg:flex-row md:flex-row pr-28'  > 
        {/* left */}
        <div className='w-1/2'>
        <div className=' bg-[#d3e4a9] bg-[url("/component3.jpg")] w-full  h-full '></div>
            
        </div>
        
        
        {/* right */}
        <div className='w-1/2 pt-20 pl-6 pb-20'>
            <div >
                <p className='text-2xl font-bold'>Transform Your ❤️ Health With</p>
                <div className='bg-[#ffbe0b]  h-1 w-1/2'></div>
            </div>
            <p className='text-4xl font-bold mt-3 '>Personalized Nutrition</p>
            <p  className='text-4xl font-bold mb-3 '> Coaching</p>
            <p>
            Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition 
            coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing 
            customized plans and ongoing support. Start your transformation today and experience the 
            power of personalized nutrition coaching        
            </p>

            <div  className='flex mt-6 mb-6 mr-6'>
                <div  className='font-semibold bg-[#ffbe0b] rounded-lg py-2 px-3'>
                    Get Starter Today
                </div>
               
                <div  className='font-semibold  bg-[#f7fbe9] rounded-lg py-2 px-3 ml-3 border'>
                    Book a Demo
                </div>

            </div>


            <div>
                    <div>

                    </div>
                    <div className='pb-12'>
                        <p><span className='text-green-800 font-bold'>430+</span>Happy Customers </p>
                    </div>

                </div>

        </div>
    </div>
  )
}

export default Component3