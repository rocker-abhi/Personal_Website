import React from 'react'
import logo from '../images/logo_4.png'
import { CiLinkedin} from "react-icons/ci";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import Download_PDF_button from '../components/DownloadPDFButton'

const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[20%] md:mt-[10%] shadow-2xl shadow-black'>
         <div className='w-full p-5 flex flex-col justify-center items-center'>
            <img src={logo} className='w-[100px] h-[100px] md:w-[100px] md:h-[100px]'/>
            <div className=' inline text-center font-rubik text-5xl font-bold'>
                <p>Living, learning, & leveling up</p>
                <p>one at a time.</p>
            </div>
         </div>
          <Download_PDF_button/>
         <div className='flex justify-between w-[50%] md:w-[30%] items-center m-[10%] md:m-[2%]'>
            <a href='https://www.linkedin.com/in/abhishek-koundal-652b181a1' target='_blank' rel='noopener noreferrer'>
                <CiLinkedin size={40} className='h-[50px] w-[50px] hover:bg-[#6e07f3] rounded-full p-[10px]' />
            </a>
            {/* <PiInstagramLogoBold  size={40} className=' h-[50px] w-[50px] hover:bg-[#6e07f3] rounded-full p-[10px]'></PiInstagramLogoBold > */}
            <a href='https://www.instagram.com/its_vicious_abhishek/' target='_blank' rel='noopener noreferrer'>
                <PiInstagramLogoBold size={40} className='h-[50px] w-[50px] hover:bg-[#6e07f3] rounded-full p-[10px]' />
            </a>
            {/* <FiGithub  size={40} className=' h-[50px] w-[50px] hover:bg-[#6e07f3] rounded-full p-[10px]'></FiGithub  > */}
            <a href='https://github.com/rocker-abhi' target='_blank' rel='noopener noreferrer'>
                <FiGithub size={40} className='h-[50px] w-[50px] hover:bg-[#6e07f3] rounded-full p-[10px]' />
            </a>
         </div>
    </div>
  )
}

export default Contact