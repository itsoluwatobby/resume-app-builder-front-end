import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaScroll } from 'react-icons/fa';
import { useEffect } from 'react';
import useResumeContext from '../context/useResumeContext';
import useWindowSize from '../hooks/useWindowSize';

const Navbar = () => {
  const {pathname} = useLocation();
  const width = useWindowSize()
  const {emailData, setSignIn, handleLogout, display, setDisplay, setSignUp, confirm, setConfirm, setError} = useResumeContext();

  useEffect(() => {
    width <= 750 && setDisplay(false)
  }, [width])

  const links = ['/step1', '/step2', '/step3', '/step4', '/step5', '/step6']

  return (
    <section className={`sticky top-0 z-50 flex flex-col ${pathname !== '/step6' && pathname !== '/' ? 'h-[180px] midscreen:h-[160px]' : 'h-[50px]'}`}>
      <div 
        className='relative bg-gray-500 midscreen:p-2 pt-2 pb-2 pr-8 pl-8 justify-between flex-none text-center flex items-center midscreen:justify-around'>
        <Link to={emailData ? '/step1' : '/'}>
          <FaScroll 
            onClick={() => {
              setDisplay(false)
              setSignUp(false)
              setSignIn(false)
            }}
            className='flex-none text-gray-400 text-4xl shadow-lg'
          />
        </Link>
        <Link to='/'>
          <h1 
            title='Home Page'
            onClick={() => {
              setDisplay(false)
              setSignUp(false)
              setSignIn(false)
            }}
            className='text-3xl font-serif flex-auto '>RESUME BUILDER
          </h1>
        </Link>
        <p 
          onClick={() => setDisplay(prev => !prev)}
          className='midscreen:block hidden cursor-pointer hover:text-gray-700 active:text-gray-900 text-3xl'>&#9776;
        </p>
        {links.includes(pathname) ? 
            <p
              onClick={handleLogout} 
              className={`${display || pathname === '/' ? 'absolute right-2 top-[52px] p-2 rounded-b-md z-30 bg-gray-500 font-serif cursor-pointer text-[22px] hover:text-gray-600' : 'rounded-b-md z-30 bg-gray-500 font-serif cursor-pointer text-[22px] midscreen:hidden hover:text-gray-600'}`}>Logout
            </p>
               : 
         !emailData ? (
            <div className={`flex items-center justify-between ${display && pathname === '/' ? 'absolute flex flex-col right-0 top-[52px] p-1  pb-2 rounded-b-md z-30 bg-gray-500 font-serif cursor-pointer midscreen:text-[18px] w-24' : 'midscreen:hidden mr-2 text-[22px] w-[180px]'}`}>
              <p
                onClick={() => {
                  setSignIn(prev => !prev)
                  setSignUp(false)
                  setError('')
                }} 
                className='midscreen:border-b hover:p-[2px] hover:border-b-2 hover:border-gray-200 transition-all font-serif cursor-pointer w-full hover:text-gray-800'>Login</p>
              <p
                onClick={() => {
                  setSignUp(prev => !prev)
                  setSignIn(false)
                  setError('')
                }} 
                className='midscreen:border-b midscreen:pt-1 hover:p-[2px] hover:border-b-2 hover:border-gray-200 transition-all w-full font-serif cursor-pointer hover:text-gray-800'>Register</p>
            </div>
          ) : (
                <div 
                  className={`flex items-center justify-between ${display && pathname === '/' ? 'absolute flex flex-col top-[52px] right-0 p-1  pb-2 rounded-b-md z-30 bg-gray-500 font-serif cursor-pointer midscreen:text-[18px] w-36' : 'midscreen:hidden mr-2 text-[22px] w-[150px]'}`}>
                  <p
                    className='midscreen:border-b midscreen:pt-1 hover:p-[2px] hover:border-b-2 hover:border-gray-200 transition-all w-full font-serif cursor-pointer hover:text-gray-800'><Link to='/step1'>Form</Link>
                  </p>
                  <p
                    onClick={handleLogout} 
                    className='midscreen:border-b midscreen:pt-1 hover:p-[2px] hover:border-b-2 hover:border-gray-200 transition-all w-full font-serif cursor-pointer hover:text-gray-800'>Logout
                  </p>
                </div>
              )
        }
      </div>
      {(pathname !== '/step6' && pathname !== '/') ? 
        (
          <nav 
            onClick={() => setDisplay(false)}
            className='bg-white flex-auto flex justify-around items-center pt-3 pb-3 shadow-lg'>
            <Link to='/step1'>
              <div title='Personal Details' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition d3ration-150 ease-in-out shadow-lg ${pathname === '/step1' ? 'bg-gray-400' : ''}`}>1</div>
            </Link>
            <Link to='/step2'>
              <div title='Education' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 trans3tion duration-150 ease-in-out shadow-lg ${pathname === '/step2' ? 'bg-gray-400' : ''}`}>2</div>
            </Link>
            <Link to='/step3'>
              <div title='Extra Details' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transitio3 duration-150 ease-in-out shadow-lg ${pathname === '/step3' ? 'bg-gray-400' : ''}`}>3</div>
            </Link>
            <Link to='/step4'>
              <div title='Project Details' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg ${pathname === '/step4' ? 'bg-gray-400' : ''}`}>4</div>
            </Link>
            <Link to='/step5'>
              <div title='Personal Details' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg ${pathname === '/step5' ? 'bg-gray-400' : ''}`}>5</div>
            </Link>
            <Link to='/step6'>
              <div title='Preview Form' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg ${pathname === '/step6' ? 'bg-gray-400' : ''}`}>6</div>
            </Link>
          </nav>
        ) : (
          pathname !== '/' &&
          <div className='flex flex-col justify-center items-center p-1 bg-gray-200 text-[18px] font-serif'>
            <p className='capitalize text-gray-700 tracking-widest  bg-gray-300 w-full text-center shadow-lg'>Preview your details before final submission</p>
            <div className='w-full midscreen:pr-2 midscreen:pl-2 pr-4 pl-4 flex items-center justify-between'>
              <Link to='/step5'>
                <p className='pt-[1px] pr-[4px] pl-[4px] hover:bg-gray-600 hover:text-white transition-all hover:rounded-md'>Click to return to previous page</p>
              </Link>
              <button 
                onClick={() => setConfirm(prev => !prev)}
                className='bg-teal-200 rounded-md p-[2px] text-[17px] cursor-pointer shadow-lg hover:opacity-80 active:opacity-100'>{confirm ? 'Cancel submission' : 'Submit Form'}</button>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Navbar