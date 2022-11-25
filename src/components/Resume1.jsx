import React, {useRef} from 'react'
import { FaAddressCard, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosSchool } from 'react-icons/io';
import { useReactToPrint } from 'react-to-print'
import useResumeContext from '../context/useResumeContext';

const Resume1 = () => {
  const {savedData, loading, error} = useResumeContext();
  const resumeRef1 = useRef()

  const handlePrint1 = useReactToPrint({
    content: () => resumeRef1.current,
    documentTitle: savedData?.email,
    onAfterPrint: () => alert('Document downloaded successsfully')
  })

  return (
    <article className='flex minscreen:mt-1 items-center p-1 h-[100vh] midscreen:h-[110vh] midscreen:max-w-[620px] w-[600px] font-serif relative'>
      <button 
        onClick={handlePrint1}
        className='absolute bg-green-400 pr-6 pl-6 rounded-md p-2 text-[17px] cursor-pointer shadow-lg hover:opacity-80 active:opacity-100 top-2 left-11 bigscreen:mb-8'>Download Resume
      </button>
      {loading ? <p className='absolute top-[40%] z-40 w-full text-center text-[32px] text-green-600'>Fetching Resume...</p> : ''}
      {!loading && error ? <p className='absolute top-[40%] capitalize w-full text-center text-[32px] text-red-600'>{error}</p> : 
      <div ref={resumeRef1} className='flex gap-1 p-1 minscreen:max-w-[80%] midscreen:w-[80%] rounded-md border shadow-2xl border-gray-400 relative'>
        <div className='rounded-tr-md rounded-br-md p-[1px] flex items-left text-[16px] font-medium absolute z-40 top-0 left-0 bg-gray-100'>
          <p className='mr-2'>Nationality:</p>
          <p className='font-[600]'>{savedData?.nationality || 'null'}</p>
        </div>
        <div className='flex flex-col items-center gap-1 w-[35vw] midscreen:w-[48%] rounded-t-full rounded-b-md bg-purple-400 pt-5 p-2 minscreen:gap-4 minscreen:font-semibold'>
          <div className='flex-none relative rounded-full border-4 border-white h-[130px] w-[202px] bg-gray-200 shadow-lg minscreen:max-w-[160px]'>
            <img src={savedData?.picture || ''} alt="userPassport" className='rounded-full w-full object-cover h-full'/>
            <div className='bg-purple-200 p-[2px] rounded-md absolute bottom-0 left-12 z-50 shadow-lg flex items-left text-[14px] font-medium minscreen:hidden'>
              <p className='mr-2'>Gender:</p>
              <p className='font-[600]'>{savedData?.gender || 'null'}</p>
            </div>
          </div>
          <div className='flex-auto flex flex-col items-left'>
            <div className='minscreen:hidden flex items-left text-[14px] font-medium'>
              <p className='mr-2'>Status:</p>
              <p className='font-[600]'>{savedData?.status || 'null'}</p>
            </div>
            <div className='minscreen:hidden flex items-left text-[14px] font-medium'>
              <p className='mr-2 capitalize'>Date 0f Birth:</p>
              <p className='font-[600]'>{savedData?.dateOfBirth || 'null'}</p>
            </div>
            <p className='border-b-2 border-gray-300 text-[18px] text-center font-medium'>{savedData?.fullName || 'John Doe'}
            </p>
            <p className='box-border mt-1 break-normal h-70 border-b-2 border-gray-300 minscreen:box-border minscreen:pt-2 minscreen:pb-1'>
              {savedData?.careerObjective || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.    Quibusdam repudiandae labore nemo praesentium? Consequuntur doloremque dicta, ullam qui dolorum quia dolore.'}
           </p>
            
            <div className='mt-2 overflow-hidden flex flex-col items-start w-full box-border minscreen:gap-2'>
              <div className='flex items-center gap-2 minscreen:flex-col'>  
                <p className='bg-gray-500 p-[1px] text-[15px] rounded-md uppercase'>Education</p>
                <div className='flex items-center'>
                  <p className='uppercase mr-1'>cgpa:</p>
                  <p className='font-[600]'>{savedData?.cgpa || 'null'}</p>
                </div>
              </div>
              <div className='flex flex-col pt-1 items-start'>
                <div className='flex items-center gap-2 w-full pb-2'>
                  <IoIosSchool className='text-[18px] mr-1'/>
                  <span className='text-gray-900 bg-gray-400 shadow-md rounded-sm text-center w-full'>
                    {savedData?.schoolDate1 || 'null'}
                  </span>
                </div>
                <span className='h-[70px] capitalize pb-1 break-all border-b-2 border-purple-300'>
                  {savedData?.college || 'Stanford university of John doe. Germany, UCH'}
                </span>
                <span className='pt-1 break-all border-b-2 border-purple-300 w-full'>
                  {savedData?.degree1 || 'null'}
                </span>
                <span className='pt-1 break-all border-b-2 border-purple-300'>
                  {savedData?.qualification || 'null'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-4 midscreen:ml-2 flex w-full h-full flex-col midscreen:items-start items-center gap-2 pt-1 whitespace-normal break-before-all'>
          <div className='flex flex-col w-full items-start'>
            <div>
              <p className='uppercase text-[15px] rounded-md bg-gray-400 p-[1px]'>Workshop | Internship</p>
              <p>{savedData?.workshop1 || 'null'}</p>
              <p>{savedData?.workshop2}</p>
            </div>
          </div>  
          <div className='flex flex-col w-full items-start'>
            <p className='uppercase text-[15px] bg-gray-400 rounded-md'>Area of Interest</p>
            <ul>
              <li>{savedData?.interest1 || 'null'}</li>
              <li>{savedData?.interest2 || 'null'}</li>
            </ul>
          </div>
          <div className='flex flex-col items-start pt-1 pb-1 w-full'>
            <p className='uppercase text-[15px] rounded-md bg-gray-400 p-[1px] '>Skills</p>
            <p>Skill: {savedData?.skill1 || 'null'}</p>
            <p>Skill: {savedData?.skill2 || 'null'}</p>
          </div>
          <div className='flex flex-col items-start w-full gap-1'>
            <p className='bg-gray-400 p-[1px] rounded-md text-[15px] uppercase'>Projects</p>
            <p className='pt-[2px] text-gray-700 border-b-2 border-gray-400 uppercase text-[15px]'>{savedData?.title1 || 'null'}</p>
            <p className='break-normal text-[14px] font-thin italic text-gray-800 box-border whitespace-normal'>
              {savedData?.link1 || 'null'}
            </p>
            <p className='break-all'>{savedData?.description1 || 'null'}</p>
            {savedData?.title2 && <p className='pt-[2px] text-gray-700 border-b-2 border-gray-400 uppercase text-[15px]'>{savedData?.title2 || 'null'}</p>}
            {savedData?.link2 && <p className='break-normal text-[14px] font-thin italic text-gray-800 box-border whitespace-normal'>
              {savedData?.link2 || 'null'}
            </p>}
            {savedData?.description2 && <p className='break-all'>{savedData?.description2 || 'null'}</p>}
          </div>
          <div className='flex flex-col border-b-2 minscreen:h-50 h-30 border-gray-300 items-start w-full'>
            <p className='uppercase text-[15px] bg-gray-500 rounded-md p-[1px] text-center'>Contact</p>
            <div className='w-full flex flex-col items-start h-28 overflow-hidden
              '>
              <div className='flex items-center pt-1 minscreen:flex-col'>
                <FaAddressCard className='text-gray-900 mr-2 text-[18px]'/>
                <span className='break-all'>{savedData?.address || 'null'}</span>
              </div>
              <div className='flex items-center pt-1 minscreen:flex-col'>
                <MdEmail className='text-gray-900 mr-2 text-[20px]'/>
                <span className='break-all'>{savedData?.email || 'johnDoe@gmail.com'}</span>
              </div>
              <p className='flex items-center pt-1'>
                <FaPhoneAlt className='text-gray-900 mr-2 text-[17px]'/>
                <span className='break-all'>{savedData?.phoneNumber || '+01-225-456-8574'}</span>
              </p> 
            </div>
          </div>
          <div className='flex flex-col mt-2 border-b-2 border-gray-300 items-start w-full'>
            <p className='uppercase text-[15px] bg-gray-500 rounded-md p-[1px] text-center'>Language Proficiency</p>
            <p className='flex items-center gap-2'>
              <span className='break-all'>Level:</span>
              <span className='break-all font-[600]'>{savedData?.languageProficiency || 'null'}</span>
            </p>
          </div>    
        </div>
      </div>}
    </article>
  )
}

export default Resume1