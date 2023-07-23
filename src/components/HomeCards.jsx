import React from 'react'
import template1 from '../images/template1.png'
import { useNavigate } from 'react-router-dom'
import useResumeContext from '../context/useResumeContext';
//
export const HomeCards = ({ reverse, top, bottom, upper }) => {
  const navigate = useNavigate();
  const {signIn, emailData, theme, signUp, savedData} = useResumeContext();

  return (
      <article className={`flex transform-gpu transition-transform skew-x-2 ${bottom ? 'md:translate-x-28' : ''} ${upper ? 'md:translate-y-10' : ''} ${reverse ? 'flex-col-reverse maxscreen:hidden absolute bottom-5 right-14' : 'flex-col'} ${top ? 'right-60 bottom-10' : ''} border-b shadow-lg rounded-md whitespace-pre-wrap md:w-[30%] bg-opacity-60 bg-slate-900 ${theme === 'light' ? 'text-black' : 'text-white'} p-2`}>
        <h1 className='text-4xl flex flex-col gap-2'>
          <p className='text-6xl'>WELCOME</p>
          <p>
            GET YOUR RESUME DONE IN ONE CLICK
          </p>
        </h1>
        <figure className='flex items-center'>
          <img src={template1} alt="template1" className='w-10 rounded-full cursor-pointer h-10 float-left mr-2 border border-slate-500'
          onClick={() => emailData && savedData ? navigate('/template1') : navigate('/step1')}
          />
          <img src={template1} alt="template1" className='w-10 rounded-full cursor-pointer h-10 float-left -ml-6 border-2 border-slate-500'
          onClick={() => emailData && savedData ? navigate('/template1') : navigate('/step1')}
          />
          <img src={template1} alt="template1" className='w-10 rounded-full cursor-pointer h-10 -ml-4 border-2 border-slate-500'
          onClick={() => emailData && savedData ? navigate('/template1') : navigate('/step1')}
          />
        </figure>

        <p className='mt-4 font-serif text-sm'>Made by Oluwatobi</p>
      </article>
    )
  }