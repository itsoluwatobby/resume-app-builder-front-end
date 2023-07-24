import React from 'react'
import useResumeContext from '../context/useResumeContext';
import { ResumeComp2 } from './ResumeComp2';

const Sample2 = () => {
  const {savedData, loading, theme, error} = useResumeContext();

  return (
    <article className='flex-none flex self-center text-xs p-2 w-full'>
      <ResumeComp2 savedData={savedData} theme={theme} />
    </article>
  )
}

export default Sample2