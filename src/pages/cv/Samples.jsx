import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sample1 from '../../components/Sample1'
import Sample2 from '../../components/Sample2'
import useResumeContext from '../../context/useResumeContext'
import useWindowSize from '../../hooks/useWindowSize'
import { ResumeNav } from '../../components/ResumeNav'

const Samples = () => {
  const {handleLogout, theme} = useResumeContext();

  return (
    <main className={`sticky top-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-black'} z-50 border border-b-1 border-r-0 border-l-0 border-t-0 border-x-8 flex flex-col`}>
      
      <ResumeNav />

      <div className='relative w-full flex gap-2 flex-wrap midscreen:w-[700px] midscreen:flex-col midscreen:pl-0 p-4 midscreen:pr-0'>
        <div className='jump absolute bg-transparent p-4 rounded-lg font-semibold text-center text-[18px] top-14 z-50 left-1/2'>Tap sample to view single template</div>
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