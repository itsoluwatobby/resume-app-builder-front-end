import React from 'react'
import useResumeContext from '../context/useResumeContext';
import { ResumeComp1 } from './ResumeComp1';

const Sample1 = () => {
  const {savedData, theme} = useResumeContext();

  return (
    <article className='flex-none w-full flex self-center text-xs p-2 md:w-[90%]'>
      <ResumeComp1 savedData={savedData} theme={theme} />
    </article>
  )
}

export default Sample1