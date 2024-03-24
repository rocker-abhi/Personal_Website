import React from 'react'

const WorkExperience = () => {
  return (
    <>
    <div className=' h-auto flex flex-col items-center font-rubik'>
      <h1 className='text-5xl bold text-center py-[100px]'>EXPERIENCE</h1>
      <div className='w-[95%] md:w-[80%] h-auto bg-[#6e07f3] rounded-[70px] flex flex-col items-center '>
          <h1 className=' font-bold text-3xl m-[10%]  md:m-[3%] text-white'>PROJECTS</h1>
          <div className='h-[30%] w-[90%] mx-[15%] my-[10%] md:my-[3%]  rounded-[10px] bg-white container p-10'>
            <h1 className=' font-bold py-5 text-3xl '>SMART TRACKER</h1>
            <p className='  md:text-xl' >Before releasing a drug onto the market in 2023, the government
            mandated that QR codes be printed. When a consumer scans a QR
            code, all relevant medical information should appear on their screen.
            The aim of the project was to gather data from several pharmaceutical firm departments, double check all the drug's
            information, and present the outcome on a screen that directs the
            visitor to the next page.</p>
          </div>
          <div className='h-[30%] w-[90%] mx-[15%] my-[10%] md:my-[3%]  rounded-[10px] bg-white container p-10'>
            <h1 className=' font-bold py-5 text-3xl '>PNR ( PRINT AND SPECT )</h1>
            <p className='  md:text-xl' >The objective of this project is to implement fetch control printing
            on the production line. This will involve printing the QR data using an
            industrial printer, scanning the data from the printed QR to ensure
            proper scanning, rejecting printed items if they are printed
            incorrectly, updating the production server with all the information
            once a specific QR has been printed, and achieving a speed of 300
            products per minute.</p>
          </div>
          <div className='h-[30%] w-[90%] mx-[15%] my-[10%] md:my-[3%]  rounded-[10px] bg-white container p-10'>
            <h1 className=' font-bold py-5 text-3xl '>TRACK AND TRACE</h1>
            <p className='  md:text-xl' >Aim of application is to monitor and trace the movement or
            progress of items, goods, or processes throughout various stages of
            a supply chain, logistics network, or production lifecycle. The
            primary goal is to provide real-time visibility, enhance transparency,
            and improve overall efficiency in managing the movement and
            status of assets.</p>
          </div>
      </div>
      
    </div>
    </>
  )
}

export default WorkExperience