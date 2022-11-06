import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useResumeContext from '../context/useResumeContext';

const Step3 = () => {
  const {skill1, skill2, skill3, skill4, interest1, interest2, interest3, interest4, careerObjective, workshop1, canNext3, workshop2, setResumeData, resumeData, setDisplay} = useResumeContext()


  return (
    <main 
      onClick={() => setDisplay(false)}
      className='step pb-8 relative'>
      <h1 className='text-white text-center pt-5 pb-5 text-4xl uppercase'>Extra Details</h1>
      <section>
        {/* skill1 and skill2 */}
        <p className='text-white uppercase ml-8 midscreen:ml-4 font-medium mb-[-14px]'>Skills/Languages</p>
        <div className='flex flex-wrap items-center w-full mt-0 justify-evenly'>
          <Input
            value={skill1}
            required={true}
            type='text' 
            placeholder='skill 1*'
            handleChange={(e) => setResumeData({...resumeData, skill1: e.target.value})}
            name={skill1}
          />
          <Input
            value={skill2}
            required={true}
            right={true}
            type='text' 
            placeholder='skill 2*'
            handleChange={(e) => setResumeData({...resumeData, skill2: e.target.value})}
            name={skill2}
          />
          <Input
            value={skill3}
            required={false}
            type='text' 
            del={true}
            placeholder='skill 3'
            handleChange={(e) => setResumeData({...resumeData, skill3: e.target.value})}
            name={skill3}
          />
          <Input
            value={skill4}
            required={false}
            del={true}
            type='text' 
            placeholder='skill 4'
            handleChange={(e) => setResumeData({...resumeData, skill4: e.target.value})}
            name={skill4}
          />
        </div>
        {/* ski and phone number */}
        <p className='text-white uppercase ml-8 midscreen:ml-4 font-medium mb-[-14px] mt-3'>Areas of interest</p>
        <div className='flex flex-wrap items-center w-full mt-0 justify-evenly'> 
          <Input
            value={interest1}
            required={true}
            type='text' 
            placeholder='interest 1*'
            handleChange={(e) => setResumeData({...resumeData, interest1: e.target.value})}
            name={interest1}
          />
          <Input
            value={interest2}
            required={true}
            right={true}
            type='text' 
            placeholder='interest 2*'
            handleChange={(e) => setResumeData({...resumeData, interest2: e.target.value})}
            name={interest2}
          />
          <Input
            value={interest3}
            required={false}
            del={true}
            type='text' 
            placeholder='interest 3'
            handleChange={(e) => setResumeData({...resumeData, interest3: e.target.value})}
            name={interest3}
          />
          <Input
            value={interest4}
            required={false}
            del={true}
            type='text' 
            placeholder='interest 4'
            handleChange={(e) => setResumeData({...resumeData, interest4: e.target.value})}
            name={interest4}
          />
        </div>
        <p className='text-white uppercase ml-8 midscreen:ml-4 font-medium mb-[-14px] mt-3'>Career Objectives</p>
        <div className='flex flex-wrap items-center w-full mt-0 justify-evenly'> 
          <Input
            width={true}
            value={careerObjective}
            required={true}
            maxLength={280}
            type='text' 
            placeholder='Career Objective*'
            handleChange={(e) => setResumeData({...resumeData, careerObjective: e.target.value})}
            name={careerObjective}
          />
        </div>
        <p className='text-white uppercase ml-8 midscreen:ml-4 font-medium mb-[-14px] mt-3'>Workshop attended | Internship</p>
        <div className='pb-3 flex flex-wrap items-center w-full mt-0 justify-evenly'> 
          <Input
            value={workshop1}
            required={true}
            type='text' 
            placeholder='Workshop 1*'
            handleChange={(e) => setResumeData({...resumeData, workshop1: e.target.value})}
            name={workshop1}
          />
          <Input
            value={workshop2}
            required={false}
            // del={true}
            type='text' 
            placeholder='Workshop 2'
            handleChange={(e) => setResumeData({...resumeData, workshop2: e.target.value})}
            name={workshop2}
          />
        </div>
      </section>
      <div className="mt-3 flex absolute bottom-5 right-5 gap-4 cursor-pointer text-2xl">
        <Link to='/step2'><p className='text-white hover:text-gray-600'>Back</p></Link>
        {canNext3 ? 
          <Link to='/step4'>
            <p className='text-white hover:text-gray-600'>Next</p>
            </Link> : ''
        }
      </div>
    </main>
  )
}

export default Step3