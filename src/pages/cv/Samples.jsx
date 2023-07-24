import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sample1 from '../../components/Sample1'
import Sample2 from '../../components/Sample2'
import useResumeContext from '../../context/useResumeContext'
import { ResumeNav } from '../../components/ResumeNav'

const Samples = () => {
  const {handleLogout, theme} = useResumeContext();

  return (
    <main className={`sticky top-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-black'} z-50 border border-b-1 border-r-0 border-l-0 border-t-0 border-x-8 flex flex-col`}>
      
      <ResumeNav />

      <div className='flex maxscreen:flex-col minscreen:overflow-x-scroll gap-10 items-center md-pl-6 md:pr-6 md:flex-row md:justify-evenly w-full'>
        <h3 className='animate-bounce absolute bg-slate-500 bg-opacity-60 p-1 rounded-lg left-20 font-serif text-[18px] top-14 z-50 m-auto'>Tap sample to view single template</h3>
        <Link to='/template1'>
          <Sample1 />
        </Link>
        <Link to='/template2'>
          <Sample2 />
        </Link>
      </div>
    </main>
  )
}

export default Samples