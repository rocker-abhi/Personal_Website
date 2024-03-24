import React from 'react'
import logo from '../images/logo_4.png'
import {HiMenuAlt3} from 'react-icons/hi'
import { useState } from 'react'
import pdf_path from '../PDF/abhishek_resume.pdf'

const Header = () => {
    const [navbar_toggle, setNav] = useState(false)

    const change_toggle = () => {
        if(navbar_toggle){
            setNav(!navbar_toggle)
            document.body.style.overflow = "scroll"
        }
        else{
            setNav(!navbar_toggle)
            document.body.style.overflow = "hidden"
        }
    }

    const download_pdf = () => {
        console.log('button clicked')
        const pdf_url = pdf_path
        window.open(pdf_url, '_blank')
    }
  return (
    <div className='bg-transparent flex flex-cols justify-between' >
        <img src={logo} className=' bg-transparent mx-[10px] mt-[10px] w-[80px]'/>
        <HiMenuAlt3 onClick={change_toggle} className={navbar_toggle ? 'z-40 text-white' : 'z-40'} size={55}/>
        <div className={navbar_toggle ? 'ease-in duration-1000 fixed text-gray-300 w-full h-screen left-0 top-0 bg-black/80 px-4 py-14 z-10 flex flex-col justify-center items-center' 
        :'absolute top-0 py-14 h-screen left-[-100%] duration-500 z-10 flex flex-col justify-center items-center'}>
            <h1 className='text-white font-margarine text-4xl m-6'>
                REACH ME OUT ON !
            </h1>
            <ul style={{ listStyleType: 'disc' }}>
                <li className='text-white font-margarine text-3xl py-4'><a href='#'>Linkedin</a></li>
                <li className='text-white font-margarine text-3xl py-4'><a href='#'>Instagram</a></li>
                <input type='button' onClick={download_pdf} value='DOWNLOAD PDF'
                    className=' font-bold font-rubik m-[10%] md:m-[5%] border border-b-2
                    border-black px-[50px] py-[10px] rounded-[20px] bg-white text-black hover:bg-black hover:text-white' />
            </ul>
        </div>
    </div>
  )
}

export default Header