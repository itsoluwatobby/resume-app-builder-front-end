import React from 'react'
import template1 from '../images/template1.png'
import { Link, useNavigate } from 'react-router-dom'
import Register from '../features/user/Register';
import Login from '../features/user/Login';
import useResumeContext from '../context/useResumeContext';
//
const Home = () => {
  const navigate = useNavigate();
  const {signIn, emailData, signUp, savedData} = useResumeContext();

  return (
    <div 
      className={`font-serif flex flex-col bg-blue-200 h-[calc(100vh-50px)] relative ${signIn || signUp ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'home'}`}>
      <div className='flex flex-col p-3 break-keep overflow-y-scroll overflow-x-hidden h-full'>
        <marquee direction='left' className='shadow-2xl sticky top-0 z-40 font-medium pt-4 p-8 text-3xl w-full text-center font-serif capitalize tracking-widest pb-12 whitespace-nowrap midscreen:whitespace-nowrap text-white'>Welcome {emailData?.split('@')[0]} to the resume builder app. <span className='capitalize text-4xl whitespace-nowrap'>{!emailData ? 'Please Sign in to get started' : ''}</span>
        </marquee>
        
        <div className='p-1 flex mt-4 relative'>
          <img src={template1} alt="template1" className='w-[300px] cursor-pointer h-[400px] midscreen:w-[230px] midscreen:h-[280px] rounded-lg float-left mr-2 animate'
          onClick={() => emailData && savedData ? navigate('/template1') : navigate('/step1')}
          />
          <p className='text-white midscreen:text-black bg-transparent text-[18px] minscreen:text-[20px] font-serif shadow-md p-2 rounded-md'>
            <span className='text-white'>
              Writing a resume isn't always an easy task,
            </span><span className='minscreen:text-white minscreen:font-semibold'> a lot always </span>comes to mind nad figuring out what to should be included and what shouldn't is always a time-tasking decision.
          </p>
          <p className='minscreen:hidden mt-52 midscreen:mt-0 midscreen:text-black text-black text-[18px] font-serif shadow-md p-2 rounded-md'>
              <span className='midscreen:text-white text-black'>
                But that is about to change cause' right here is an app that will</span> make everything easier for you.
               
              The right questions to be included in your resume have all been decided for you, all you need to do is to fill them in.
            Good luck.
          </p>
          {emailData ?
            <Link to={savedData?.firstName ? '/samples' : '/step1'}>
              <button 
                className='absolute minscreen:top-[60%] midscreen:left-[5%] midscreen:top-[75%] top-[75%] left-[30%] bg-gray-400 midscreen:pr-5 midscreen:pl-5 rounded-md midscreen:p-3 p-8 text-[24px] cursor-pointer shadow-lg hover:opacity-80 midscreen:text-[17px] font-[600] active:opacity-100'>{savedData?.firstName ? 'View your resume' : 'Create your resume'}
              </button>
            </Link> : ''
          }
        </div>
        <p className='midscreen:mt-0 mt-20 text-[18px] font-[600] shadow-2xl p-1 text-center rounded-lg bg-gray-400 '>
          You also get to choose a template for your resume
        </p>
      </div>
      {signUp && <Register />}
      {signIn && <Login />}
    </div>
  )
}

export default Home