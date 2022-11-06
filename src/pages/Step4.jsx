import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useResumeContext from '../context/useResumeContext';

const Step4 = () => {
  const {title1, link1, description1, title2, canNext4, link2, description2, resumeData, setResumeData, setDisplay} = useResumeContext()

  return (
    <main 
      onClick={() => setDisplay(false)}
      className='pb-8 relative step'>
      <h1 className='text-white text-center pt-10 pb-5 text-4xl uppercase'>Project Details</h1>
      <section>
        {/* skill1 and skill2 */}
        <p className='text-white uppercase ml-9 midscreen:ml-5 font-medium mb-[-14px]'>Project 1</p>
        <div className='flex flex-col items-center w-full mt-0 justify-evenly'>
          <Input
            required={true}
            type='text' 
            width={true} 
            value={title1}
            placeholder='Title*'
            handleChange={(e) => setResumeData({...resumeData, title1: e.target.value})}
            name={title1}
          />
          <Input
            required={true}
            value={link1}
            width={true} 
            type='text' 
            placeholder='Link*'
            handleChange={(e) => setResumeData({...resumeData, link1: e.target.value})}
            name={link1}
          />
          <Input
            required={true}
            value={description1}
            width={true} 
            type='text'
            maxLength={120} 
            placeholder='Description*'
            handleChange={(e) => setResumeData({...resumeData, description1: e.target.value})}
            name={description1}
          />
        </div>
        {/* ski and phone number */}
        <p className='text-white uppercase ml-9 midscreen:ml-5 font-medium mb-[-14px] mt-3'>Project 2</p>
        <div className='pb-6 flex flex-col items-center w-full mt-0 justify-evenly'> 
          <Input
            required={false}
            value={title2}
            type='text'
            width={true} 
            placeholder='Title'
            handleChange={(e) => setResumeData({...resumeData, title2: e.target.value})}
            name={title2}
          />
          <Input
            required={false}
            value={link2}
            type='text' 
            width={true} 
            placeholder='Link'
            handleChange={(e) => setResumeData({...resumeData, link2: e.target.value})}
            name={link2}
          />
          <Input
            required={false}
            value={description2}
            type='text' 
            width={true} 
            maxLength={120}
            placeholder='Description'
            handleChange={(e) => setResumeData({...resumeData, description2: e.target.value})}
            name={description2}
          />
        </div>
      </section>
      <div className="mt-3 flex absolute bottom-5 right-5 gap-4 cursor-pointer text-2xl">
        <Link to='/step3'><p className='text-white hover:text-gray-600'>Back</p></Link>
        {canNext4 ? 
          <Link to='/step5'>
            <p className='text-white hover:text-gray-600'>Next</p>
            </Link> : ''
        }
      </div>
    </main>
  )
}

export default Step4