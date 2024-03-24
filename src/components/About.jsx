import React from 'react'
import bottom_image from '../images/bottom_image.svg'
import database_image from '../images/database_2.svg'
import frontend_image from '../images/website_2.svg'
import api from '../images/api_2.svg'

const About = () => {
  return (
    <div className='w-full h-auto text-white font-margarine flex flex-col items-center'>
        <div className='w-[100%] flex flex-col items-center justify-center'>
            <img src={bottom_image} className='object-contain h-[50%] w-[50%]'/>
        </div>
        <div className='w-full p-44 md:h-auto lg:h-[100vh] px-[10%] relative bg-[#6e07f3] rounded-t-xl flex flex-cols items-center justify-center'>
            <div className='w-full md:w-[80%]'>
                <h1 className='font-bold text-3xl md:text-5xl'>Hi, I'm Abhishek. Nice to meet you. </h1>
                <p className=' py-10 text-xl md:text-xl font-rubik'>With a dynamic background spanning ASP.NET, React, Tailwind CSS, Python, Django, Django Rest Framework,
                    and FastAPI, I bring over a year of versatile experience to the table. An adaptable and enthusiastic
                    software developer, I thrive on exploring new technologies and pushing boundaries. With a LinkedIn presence
                    boasting 2000+ impressions, I am dedicated to delivering innovative solutions and staying at the forefront
                    of technological advancements.</p>
            </div>
        </div>
        <div className=" font-rubik relative w-[95%] md:w-[80%] h-auto translate-y-[-100px] bg-white shadow-2xl rounded-[70px] text-black flex flex-col justify-center items-center md:grid md:grid-cols-3">
            <div id='card_1' className='border-b-2 md:border-r-2 w-full  text-center py-[10%] m-[5px] h-full'>
                <div id='logo' className=' py-3 w-[100px]  h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-cyan-300 p-5 mx-auto'>
                    <img src={frontend_image}  alt="Frontend Logo"/>
                </div>
                <h1 className='text-3xl font-bold'>Frontend</h1>
                <p className=' text-red-700'>Technology used:</p>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>TAILWIND CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>REDUX</li>
                </ul>
            </div>
            <div id='card_2' className='border-b-2 md:border-r-2 w-full text-center py-[10%] m-[5px] h-full' >
                <div id='logo' className='py-3 w-[100px]  h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-cyan-300 p-5 mx-auto'>
                    <img src={api}  alt="API Logo"/>
                </div>
                <h1 className=' text-3xl font-bold'>Backend</h1>
                <p className=' text-red-700'>Technology used:</p>
                <ul>
                    <li>DJANGO</li>
                    <li>DJANGO REST FRAMEWORK</li>
                    <li>JAVASCRIPT</li>
                    <li>FLASK</li>
                    <li>DJANGO ORM</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div id='card_3' className='w-full  text-center py-[10%] m-[5px] h-full'>
                <div id='logo' className='py-3 w-[100px]  h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-cyan-300 p-5 mx-auto'>
                    <img src={database_image}   alt="Database Logo"/>
                </div>
                <h1 className=' font-bold text-3xl'>DATABASE</h1>
                <p className=' text-red-700'>Technology used:</p>
                <ul>
                    <li>MYSQL</li>
                    <li>POSTGRES</li>
                    <li>SQL SERVER</li>
                    <li>SQLITE3</li>
                    <li></li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About