import React from 'react'
import { FaAddressCard, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosSchool } from 'react-icons/io';

export const ResumeComp1 = ({ savedData, theme, resumeRef1 }) => {

  return (
    <div 
      ref={resumeRef1}
      className='box-border flex minscreen:h-[65%] w-full border md:w-[75%] rounded-md shadow-lg self-center gap-2 p-2 relative max-h-[600]'>

        <div className={`rounded-tr-md rounded-br-md p-1 flex items-left font-medium absolute z-40 top-0 left-0 ${theme === 'light' ? 'bg-gray-100' : 'text-black bg-gray-200'}`}>
          <p className='mr-2'>Nationality:</p>
          <p className='font-medium'>{savedData?.nationality}</p>
        </div>

        <section className={`flex-none w-[40%] h-full text-black flex flex-col items-center rounded-t-2xl minscreen:gap-1 gap-3 bg-purple-300 minscreen:pt-2 pt-5 p-2 whitespace-pre-wrap`}>

          <figure className='flex-none relative rounded-3xl border-2 border-white h-[120px] midscreen:h-[100px] w-full minscreen:max-w-[160px] bg-gray-200 shadow-lg'>

            <img src={savedData?.picture} alt="userPassport" className='rounded-3xl w-full object-cover h-full'/>
            <figcaption className='bg-gray-200 p-[2px] rounded-md absolute bottom-0 left-12 shadow-lg flex items-left text-[14px] font-medium minscreen:hidden'>
              <p className='mr-2'>Gender:</p>
              <p className='font-medium'>{savedData?.gender}</p>
            </figcaption>

          </figure>

          <div className='flex-auto flex flex-col items-left gap-1'>

            <div className='minscreen:hidden flex items-left text-[14px] font-medium'>
              <p className='mr-2'>Status:</p>
              <p className='font-medium'>{savedData?.status || 'null'}</p>
            </div>

            <div className='minscreen:hidden flex items-left text-[14px] font-medium'>
              <p className='mr-2 capitalize'>Date 0f Birth:</p>
              <p className='font-medium'>{savedData?.dateOfBirth || 'null'}</p>
            </div>

            <p className='border-b-2 border-gray-300 text-[18px] uppercase text-center font-medium minscreen:mt-1 mt-3'>{savedData?.fullName || 'John Doe'}</p>
            <p className='tracking-wide border-b-2 p-1 border-gray-300 whitespace-pre-wrap minscreen:pt-2 minscreen:pb-1'>
              {savedData?.careerObjective || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam repudiandae labore nemo praesentium? Consequuntur doloremque dicta, ullam qui dolorum quia dolore.'}
            </p>
            
            <div className='flex flex-col items-start minscreen:p-1 w-full box-border minscreen:gap-1 p-2 gap-2'>

              <p className='font-medium text-[15px] rounded-md uppercase'>Education</p>
              <div className='flex items-center'>
                <p className='uppercase mr-1'>cgpa:</p>
                <p className='font-medium'>{savedData?.cgpa || 'null'}</p>
              </div>

              <div className='flex flex-col pt-1 items-start'>
                <div className='flex items-center gap-2 w-full pb-2'>
                  <IoIosSchool className='text-[18px] mr-1' />
                  <span className='text-gray-900 bg-gray-400 shadow-md rounded-sm text-center w-full'>
                    {savedData?.schoolDate1 || 'null'}
                  </span>
                </div>
                <span className='max-h-[70px] capitalize pb-1 break-all border-b-2 border-purple-300'>
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

        </section>

        <section className='flex-none w-3/5 flex flex-col gap-3'>

          <div className='flex flex-col w-full items-start flex-none'>

            <div className='flex flex-col'>
              <p className='uppercase text-[15px] rounded-md font-medium'>Workshop | Internship</p>
              <p>{savedData?.workshop1 || 'null'}</p>
              <p>{savedData?.workshop2}</p>
            </div>

          </div>

          <div className='flex flex-col w-full items-start flex-none'>

            <p className='uppercase text-[15px] font-medium rounded-md gap-1'>Area of Interest</p>
            <ul>
              <li>{savedData?.interest1 || 'null'}</li>
              <li>{savedData?.interest2 || 'null'}</li>
            </ul>

          </div>

          <div className='flex flex-col items-start pt-1 pb-1 w-full flex-none gap-1'>

            <p className='uppercase text-[15px] rounded-md font-medium p-[1px] '>Skills</p>
            <p>Skill: {savedData?.skill1 || 'null'}</p>
            <p>Skill: {savedData?.skill2 || 'null'}</p>

          </div>

          <div className='flex flex-col items-start w-full gap-1 flex-none'>
            <p className='font-medium p-[1px] rounded-md text-[15px] uppercase'>Projects</p>
            <p className='pt-[2px] border-b-2 border-gray-400 uppercase text-[15px]'>{savedData?.title1 || 'null'}</p>
            <p className='break-normal text-[14px] font-thin italic box-border whitespace-normal'>
              {savedData?.link1 || 'null'}
            </p>
            <p className='break-all'>{savedData?.description1 || 'null'}</p>
            {savedData?.title2 && <p className='pt-[2px] text-gray-700 border-b-2 border-gray-400 uppercase text-[15px] box-border whitespace-normal'>{savedData?.title2 || 'null'}</p>}
            {savedData?.link2 && <p className='text-[14px] font-thin italic text-gray-800 break-normal'>
              {savedData?.link2 || 'null'}
            </p>}
            {savedData?.description2 && <p className='break-all'>{savedData?.description2 || 'null'}</p>}
          </div>

          <div className='flex-none flex flex-col minscreen:h-50 h-30 border-b-2 border-gray-300 items-start w-full'>
            <p className='uppercase text-[15px] font-medium rounded-md p-[1px] text-center'>Contact</p>
            <div className='w-full flex flex-col items-start h-28 overflow-hidden'>
              <div className='flex items-center pt-1'>
                <FaAddressCard className='mr-2 text-[18px]'/>
                <span className='break-all'>{savedData?.address || 'null'}</span>
              </div>
              <div className='flex items-center pt-1'>
                <MdEmail className='mr-2 text-[20px]'/>
                <span className='break-all'>{savedData?.email || 'johnDoe@gmail.com'}</span>
              </div>
              <p className='flex items-center pt-1'>
                <FaPhoneAlt className='mr-2 text-[17px]'/>
                <span className='break-all'>{savedData?.phoneNumber || '+01-225-456-8574'}</span>
              </p> 
            </div>
          </div>

          <div className='flex-auto flex flex-col border-b-0 border-gray-300 items-start h-full w-full'>
            <p className='uppercase text-[15px] font-medium rounded-md p-[1px] text-center'>Language Proficiency</p>
            <p className='flex items-center gap-2'>
              <span className='break-all'>Level:</span>
              <span className='break-all font-medium'>{savedData?.languageProficiency || 'null'}</span>
            </p>
          </div>  

        </section>

      </div>
  )
}
