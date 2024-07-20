import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi";
const Features = () => {
  return (
    <div className='bg-[#d3e4a9]'> 

    <div className='flex font-bold  align-center justify-center text-5xl p-7'> Features</div>
    <p className='flex   align-center justify-center ' >Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
        <div className='flex py-6 md:flex-row lg:flex-row sm:flex-col'>
            {/* left tables */}
            <div className='py-10 w-1/2'>
                <div className='bg-white m-5 rounded-lg p-5'>
                    <div className='flex '>
                        <i><PiForkKnifeFill /></i>
                        <div className='font-bold text-md mb-4 ml-2'>Personalized Nutrition Plans</div>
                    </div>
                    <p> Receive a tailored nutrition plan designed specifically for your body and goals. Our
                        certified nutritionists will consider your unique needs, dietary preferences, and health
                        conditions to create a plan that suits you best.</p>
                </div>
                <div className='bg-white m-5 rounded-lg p-5'>
                    <div className='flex '>
                        <i><PiForkKnifeFill /></i>
                        <div className='font-bold text-md mb-4 ml-2'>Personalized Nutrition Plans</div>
                    </div>
                    <p> Receive a tailored nutrition plan designed specifically for your body and goals. Our
                        certified nutritionists will consider your unique needs, dietary preferences, and health
                        conditions to create a plan that suits you best.</p>
                </div>
                <div className='bg-white m-5 rounded-lg p-5'>
                    <div className='flex '>
                        <i><PiForkKnifeFill /></i>
                        <div className='font-bold text-md mb-4 ml-2'>Personalized Nutrition Plans</div>
                    </div>
                    <p> Receive a tailored nutrition plan designed specifically for your body and goals. Our
                        certified nutritionists will consider your unique needs, dietary preferences, and health
                        conditions to create a plan that suits you best.</p>
                </div>
                
            </div>

            {/* right tables */}

            <div className='py-10 w-1/2 '>
                <div className='bg-white m-5 rounded-lg p-5'>
                    <div className='flex '>
                        <i><PiForkKnifeFill /></i>
                        <div className='font-bold text-md mb-4 ml-2'>Personalized Nutrition Plans</div>
                    </div>
                    <p> Receive a tailored nutrition plan designed specifically for your body and goals. Our
                        certified nutritionists will consider your unique needs, dietary preferences, and health
                        conditions to create a plan that suits you best.</p>
                </div>
                <div className='bg-white m-5 rounded-lg p-5'>
                    <div className='flex '>
                        <i><PiForkKnifeFill /></i>
                        <div className='font-bold text-md mb-4 ml-2'>Personalized Nutrition Plans</div>
                    </div>
                    <p> Receive a tailored nutrition plan designed specifically for your body and goals. Our
                        certified nutritionists will consider your unique needs, dietary preferences, and health
                        conditions to create a plan that suits you best.</p>
                </div>
                <div className='bg-white m-5 rounded-lg p-5'>
                    <div className='flex '>
                        <i><PiForkKnifeFill /></i>
                        <div className='font-bold text-md mb-4 ml-2'>Personalized Nutrition Plans</div>
                    </div>
                    <p> Receive a tailored nutrition plan designed specifically for your body and goals. Our
                        certified nutritionists will consider your unique needs, dietary preferences, and health
                        conditions to create a plan that suits you best.</p>
                </div>
                
            </div>


        </div>
    
    </div>
  )
}

export default Features