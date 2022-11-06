import React from 'react'
import { FaHome, FaPhoneAlt, FaLanguage } from 'react-icons/fa';
import { MdEmail, MdSchool, MdWorkspacesOutline } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SiActivision } from 'react-icons/si';
import useResumeContext from '../context/useResumeContext';

const Sample2 = () => {
  const {savedData, loading, error} = useResumeContext();

  return (
    <article className='flex-auto flex items-center p-1 h-[100vh] midscreen:h-[110vh] midscreen:max-w-[720px] w-full font-serif'>
      <div className='w-full flex flex-col gap-1 p-2 midscreen:w-full h-[95%] rounded-md border shadow-2xl border-gray-400 relative'>
        <div className='flex-none max-h-32 bg-slate-100 flex items-center box-border'>
          <div className='flex-none h-full bg-gray-700 w-24 shadow-2xl mr-2 flex items-start'>
            <img src={savedData?.picture || ''} alt="userPassport" className='w-full object-cover h-full'/>
          </div>
          <div className='flex-none flex flex-col gap-1 items-center'>
            <h2 className='capitalize text-[18px]'>{savedData?.firstName || 'first Name'}</h2>
            <h2 className='capitalize text-[18px]'>{savedData?.lastName || 'last Name'}</h2>
          </div>
          <div className='flex-auto flex flex-col items-end'>
            <div className='flex items-center gap-2'>
              <p className='capitalize text-gray-800'>{savedData?.address || 'address'}</p>
              <FaHome className='text-[20px] text-purple-700'/>
            </div>
            <div className='flex items-center gap-2'>
              <p className='capitalize text-gray-800'>{savedData?.phone || 'address'}</p>
              <FaPhoneAlt className='text-[20px] text-purple-700'/>
            </div>
            <div className='flex items-center gap-2'>
              <p className='capitalize text-gray-800'>{savedData?.email || 'email'}</p>
              <MdEmail className='text-[20px] text-purple-700'/>
            </div>
            <div className='flex items-center gap-2'>
              <p className='capitalize text-gray-800'>{savedData?.linkedIn || 'linkedIn'}</p>
              <AiFillLinkedin className='text-[20px] text-purple-700'/>
            </div>
          </div>
        </div>
        <div className='flex-auto flex flex-col gap-2 p-2 bg-slate-200 text-[15px]'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 text-white p-[6px] rounded-full'>
                <GiHamburgerMenu />
              </div>
              <h2 className='uppercase font-semibold'>Career Objective</h2>
            </div>
            <p className='ml-10'>{savedData?.careerObjective || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quasi, numquam impedit eius voluptatibus facilis delectus!'}</p>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 text-white p-[6px] rounded-full'>
                <MdSchool />
              </div>
              <h2 className='uppercase font-semibold'>Education</h2>
            </div>
            <div className='ml-10 flex flex-col'>
              <div className='flex flex-col'>
                <h2 className='text-purple-700 font-[600]'><b>{savedData?.degree1 || 'degree1'} |</b> <span className='text-black font-medium'>{savedData?.college || 'college'}</span></h2>
                <p className='text-[17px]'>{savedData?.schoolDate1 || 'schoolDate1'}</p>
                <p>{savedData?.qualification || 'qualification'}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 text-white p-[6px] rounded-full'>
                <BiNetworkChart />
              </div>
              <h2 className='uppercase font-semibold'>Workshop</h2>
            </div>
            <div className='ml-10 flex flex-col'>
              <div className='flex flex-col'>
                <h2 className='text-purple-700 font-[600]'>{savedData?.workshop1 || 'workshop1'}</h2>
                {savedData?.workshop2 && 
                <h2 className='text-purple-700 font-[600]'>{savedData?.workshop2 || 'workshop2'}</h2>}
              </div>
            </div>  
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 text-white p-[6px] rounded-full'>
                <MdWorkspacesOutline />
              </div>
              <h2 className='uppercase font-semibold'>Skills</h2>
            </div>
            <div className='flex flex-col justify-center ml-10'>
              <p className='flex'>
                <span className='flex-auto flex items-center gap-2'><div className='bg-purple-700 rounded-full w-2 h-2'></div>{savedData?.skill1 || 'skill1'}</span>
                <span className='flex-auto flex items-center gap-2'><div className='bg-purple-700 rounded-full w-2 h-2'></div>{savedData?.skill2 || 'skill2'}</span>
              </p>
              <p className='flex justify-between'>
                {savedData?.skill3 && 
                <span className='flex-auto flex items-center gap-2'><div className='bg-purple-700 rounded-full w-2 h-2'></div>{savedData?.skill3 || 'skill3'}</span>}
                {savedData?.skill3 && 
                <span className='flex-auto flex items-center gap-2'><div className='bg-purple-700 rounded-full w-2 h-2'></div>{savedData?.skill4 || 'skill4'}</span>}
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 text-white p-[6px] rounded-full'>
                <SiActivision />
              </div>
              <h2 className='uppercase font-semibold'>Projects</h2>
            </div>
            <div className='ml-10 flex flex-col'>
              <div className='flex flex-col'>
                <h2 className='text-purple-700 font-[600]'><b>{savedData?.title1 || 'Title1'} |</b> <span className='text-black font-medium italic'>{savedData?.link1 || 'Link1'}</span></h2>
                <p>{savedData?.description1 || 'Description1'}</p>
              </div>
              {savedData?.title2 && <div className='flex flex-col'>
                <h2 className='text-purple-700 font-[600]'><b>{savedData?.title2 || 'Title2'} |</b> <span className='text-black font-medium italic'>{savedData?.link2 || 'Link2'}</span></h2>
                <p>{savedData?.description2 || 'Description2'}</p>
              </div>}
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-3'>
              <div className='bg-purple-800 text-white p-[6px] rounded-full'>
                <FaLanguage />
              </div>
              <h2 className='uppercase font-semibold'>Language Proficiency</h2>
            </div>
            <div className='ml-10 flex flex-col'>
              <div className='flex flex-col'>
                <h2 className='text-purple-700 font-[600]'>{savedData?.languageProficiency || 'language Proficiency'}</h2>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </article>
  )
}

export default Sample2