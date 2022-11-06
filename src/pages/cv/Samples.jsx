import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sample1 from '../../components/Sample1'
import Sample2 from '../../components/Sample2'
import useResumeContext from '../../context/useResumeContext'
import useWindowSize from '../../hooks/useWindowSize'

const Samples = () => {
  const [display, setDisplay] = useState(false)
  const {handleLogout} = useResumeContext();
  const width = useWindowSize();

  useEffect(() => {
    width <= 750 && setDisplay(false)
  }, [width])

  return (
    <main>
      <nav className='sticky top-0 z-50 font-serif flex justify-between items-center p-2 pl-6 pr-6 text-2xl bg-gray-500'>
        <Link to='/'>
          <div className='cursor-pointer uppercase'>
            Resume Builder
          </div>
        </Link>
        <div className='flex items-center gap-6 relative'>
          <div className={`flex font-serif text-[17px] items-center ${display ? 'absolute pt-2 pb-2 right-[-25px] bg-gray-500 top-[44px] flex-col text-[16px] w-[90px] rounded-b-md z-50' : 'gap-6'}`}>
            <Link to='/'>
              <p className={`cursor-pointer uppercase hover:border-b-2 hover:border-gray-400 ${display ? 'midscreen:block' : 'midscreen:hidden'}`}>Home</p>
            </Link>
            <Link to='/step1'>
              <p className={`cursor-pointer uppercase hover:border-b-2 hover:border-gray-400 ${display ? 'midscreen:block' : 'midscreen:hidden'}`}>Form</p>
            </Link>
            <p 
            onClick={handleLogout}
            className={`cursor-pointer uppercase hover:border-b-2 hover:border-gray-400 ${display ? 'midscreen:block' : 'midscreen:hidden'}`}>Logout</p>
          </div>
          <p 
            onClick={() => setDisplay(prev => !prev)}
            className='hidden midscreen:block cursor-pointer hover:text-gray-700 active:text-gray-900 text-3xl'>&#9776;</p>
        </div>
      </nav>
      <div className='relative w-full flex midscreen:flex-col midscreen:pl-0 pl-4 pr-4 midscreen:pr-0'>
      <div className='jump absolute bg-transparent p-4 rounded-lg font-semibold text-center text-[18px] top-14 z-50 left-1/2'>Tap sample to view single template</div>
        <Link to='/template1'><Sample1 /></Link>
        <Link to='/template2'><Sample2 /></Link>
      </div>
    </main>
  )
}

export default Samples