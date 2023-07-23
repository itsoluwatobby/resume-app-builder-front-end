import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print'
import useResumeContext from '../context/useResumeContext';
import { Comp2 } from './Comp2';

const Resume2 = () => {
  const {savedData, loading, error, theme} = useResumeContext();
  const resumeRef2 = useRef()

  const handlePrint = useReactToPrint({
    content: () => resumeRef2.current,
    documentTitle: savedData?.email,
    onAfterPrint: () => alert('Document downloaded successsfully')
  })


  return (
    <article className='flex items-center p-1 h-[100vh] midscreen:h-[110vh] midscreen:max-w-[620px] w-[600px] font-serif relative'>
      <button 
        onClick={handlePrint}
        className='absolute bg-green-400 pr-6 pl-6 rounded-md p-2 text-[17px] cursor-pointer shadow-lg hover:opacity-80 active:opacity-100 top-2 left-11'>Download Resume
      </button>
      {loading ? <p className='absolute top-[40%] z-40 w-full text-center text-[32px] text-green-600'>Fetching Resume...</p> : ''}
      {
        !loading && error 
          ? <p className='absolute top-[40%] capitalize w-full text-center text-[32px] text-red-600'>{error}</p> 
            : <Comp2 
                savedData={savedData} 
                theme={theme} 
                resumeRef2={resumeRef2} 
              />
      }
    </article>
  )
}

export default Resume2