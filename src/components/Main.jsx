import React from 'react'
import profile_image from '../images/profile_3.jpg'
// import bottom_image from '../images/bottom_image.svg'

const hero = () => {
  return (
    <>
      <div className='h-auto py-24 md:py-32 w-full flex flex-col justify-center items-center md:p-10'>
        <div className='w-[80%] md:grid md:grid-cols-8 md:h-[50%] '>
          <div className=' md:col-span-4 md:items-center md:justify-center md:flex-col md:flex'>
            <h1 className='font-bold text-3xl md:text-5xl font-margarine text-center '>
              Hello, I'm Abhishek Koundal, I'm a software developer
            </h1>
            <p className='m-5 text-xl text-center font-rubik '>
            "Programmers are architects of logic, weaving intricate codes with creativity and precision.
            Each line of code is a testament to their resilient spirit and relentless pursuit of perfection."
            </p>
          </div>
          <div className=' flex justify-center md:h-[100%] md:col-span-4'>
            <img className='rounded-full w-[60%] md:h-[400px] md:w-[400px] bg-[#6e07f3]' src={profile_image} />
          </div>
        </div>
      </div>
    </>
  )
}

export default hero