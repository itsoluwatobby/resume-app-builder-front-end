import React from 'react'
import useResumeContext from '../context/useResumeContext';
import { Comp1 } from './comp1';

const Sample1 = () => {
  const {savedData, theme} = useResumeContext();

  return (
    <article className='flex-none w-full flex self-center text-xs p-2 h-screen md:w-[90%]'>
      <Comp1 savedData={savedData} theme={theme} />
    </article>
  )
}

export default Sample1