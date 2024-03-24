import React from 'react'
import pdf_path from '../PDF/abhishek_resume.pdf'


const DownloadPDFButton = () => {

    const download_pdf = () => {
        console.log('button clicked')
        const pdf_url = pdf_path
        window.open(pdf_url, '_blank')
    }   

  return (
    <input type='button' onClick={download_pdf} value='DOWNLOAD RESUME'
     className=' font-bold font-rubik m-[10%] md:m-[5%] border border-b-2
      border-black px-[50px] py-[10px] rounded-[20px] hover:bg-black hover:text-white' />
  )
}

export default DownloadPDFButton