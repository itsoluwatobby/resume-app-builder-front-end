import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useEffect } from 'react';
import useResumeContext from '../context/useResumeContext';
import useWindowSize from '../hooks/useWindowSize';

const Navbar = () => {
  const {pathname} = useLocation();
  const width = useWindowSize()
  const { canNext1, canNext2, canNext3, canNext4, canNext5, emailData, theme, setTheme, setSignIn, handleLogout, display, setDisplay, setSignUp, confirm, setConfirm, setError} = useResumeContext();

  useEffect(() => {
    width <= 750 && setDisplay(false)
  }, [width])

  const links = ['/step1', '/step2', '/step3', '/step4', '/step5', '/step6']

  return (
    <section className={`sticky top-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-black'} z-50 border border-b-1 border-r-0 border-l-0 border-t-0 border-x-8 flex flex-col ${pathname !== '/step6' && pathname !== '/' ? 'h-[180px] midscreen:h-[160px]' : 'h-[50px]'}`}>
      <div 
        className='relative midscreen:p-2 pt-2 pb-2 pr-8 pl-8 justify-between flex-none text-center flex items-center'>
        <Link to={emailData ? '/step1' : '/'}>
          <h1 
            title='Home Page'
            onClick={() => {
              setDisplay(false)
              setSignUp(false)
              setSignIn(false)
            }}
            className='text-lg first-letter:text-4xl font-serif flex-auto minscreen:text-sm hover:opacity-60 active:opacity-100 transition-all minscreen:first-letter:text-xl'>RESUME BUILDER
          </h1>
        </Link>
        <div className='text-xl minscreen:text-base'>
          {
            theme == 'light' ?
              <BsMoonStars 
                className='cursor-pointer hover:opacity-70 transition-all'
                onClick={() => setTheme('dark')}
              />
            :
              <BsSun 
                className='cursor-pointer hover:opacity-70 transition-all'
                onClick={() => setTheme('light')}
              />
          }
        </div>
        {links.includes(pathname) ? 
            <button
              onClick={handleLogout} 
              className={`font-serif hover:opacity-60 cursor-pointer transition-all active:opacity-100`}>Logout
            </button>
               : 
         !emailData ? (
            <div className={`flex items-center justify-between font-serif gap-4 minscreen:text-sm`}>
              <button
                onClick={() => {
                  setSignIn(prev => !prev)
                  setSignUp(false)
                  setError('')
                }} 
                className='font-serif hover:opacity-60 cursor-pointer transition-all active:opacity-100'>Login</button>
              <button
                onClick={() => {
                  setSignUp(prev => !prev)
                  setSignIn(false)
                  setError('')
                }} 
                className='font-serif hover:opacity-60 cursor-pointer transition-all active:opacity-100'>Register</button>
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
            className={`${theme === 'light' ? 'bg-white' : 'bg-slate-800'} flex-auto flex justify-around items-center pt-3 pb-3 shadow-lg`}>
            <Link to='/step1'>
              <div title='Personal Details' className={`bg-red-200 w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition d3ration-150 ease-in-out shadow-lg ${pathname === '/step1' ? 'bg-gray-400' : ''}`}>1</div>
            </Link>
            <Link to={canNext1 ? '/step2' : null}>
              <div title='Education' className={`${canNext1 ? 'bg-red-200' : 'bg-gray-300'} w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 trans3tion duration-150 ease-in-out shadow-lg ${pathname === '/step2' ? 'bg-gray-400' : ''}`}>2</div>
            </Link>
            <Link to={canNext2 ? '/step3' : null}>
              <div title='Extra Details' className={`${canNext2 ? 'bg-red-200' : 'bg-gray-300'} w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transitio3 duration-150 ease-in-out shadow-lg ${pathname === '/step3' ? 'bg-gray-400' : ''}`}>3</div>
            </Link>
            <Link to={canNext3 ? '/step4' : null}>
              <div title='Project Details' className={`${canNext3 ? 'bg-red-200' : 'bg-gray-300'} w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg ${pathname === '/step4' ? 'bg-gray-400' : ''}`}>4</div>
            </Link>
            <Link to={canNext4 ? '/step5' : null}>
              <div title='Personal Details' className={`${canNext4 ? 'bg-red-200' : 'bg-gray-300'} w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg ${pathname === '/step5' ? 'bg-gray-400' : ''}`}>5</div>
            </Link>
            <Link to={canNext5 ? '/step6' : null}>
              <div title='Preview Form' className={`${canNext5 ? 'bg-red-200' : 'bg-gray-300'} w-14 h-14 grid place-content-center rounded-full text-2xl cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out shadow-lg ${pathname === '/step6' ? 'bg-gray-400' : ''}`}>6</div>
            </Link>
          </nav>
        ) : (
          pathname !== '/' &&
          <div className={`flex flex-col justify-center items-center p-1 ${theme === 'light' ? 'bg-gray-100' : 'bg-slate-800'} text-[18px] font-serif minscreen:mb-10`}>
            <p className='capitalize text-gray-700 tracking-widest  bg-gray-300 w-full text-center shadow-lg'>Preview your details before final submission</p>
            <div className='w-full midscreen:pr-2 midscreen:pl-2 pr-4 pl-4 flex items-center justify-between'>
              <Link to='/step5'>
                <p className='pt-[1px] pr-[4px] pl-[4px] hover:bg-gray-600 hover:text-white transition-all hover:rounded-md'>Back</p>
              </Link>
              <button 
                onClick={() => {
                  setConfirm(prev => !prev)
                  setError('')
                }}
                className='bg-green-900 text-white rounded-md pl-2 pr-2 text-[17px] cursor-pointer shadow-lg hover:opacity-80 active:opacity-100'>{confirm ? 'Cancel submission' : 'Submit Form'}</button>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Navbar