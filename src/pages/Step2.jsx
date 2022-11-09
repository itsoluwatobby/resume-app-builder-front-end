import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useResumeContext from '../context/useResumeContext';

const Step2 = () => {
  const {college, schoolDate1, cgpa, qualification, degree1, schoolName, schoolDate2, percentage, schoolQualification, degree2, resumeData, setResumeData, canNext2, setDisplay} = useResumeContext()

  return (
    <main 
      onClick={() => setDisplay(false)}
      className='pb-4 relative step'>
      <h1 className='text-center pt-4 minscreen:pt-4 pb-4 text-4xl text-white'>EDUCATION DETAILS</h1>
      <section>
        {/* college, qualification, cgpa, description and date */}
        <div className='flex flex-wrap items-center mt-1 justify-evenly border-b-2 border-gray-200'>
          <Input
            value={college}
            type='text' 
            placeholder='College/University*'
            handleChange={(e) => setResumeData({...resumeData, college: e.target.value})}
            required={true}
            name={college}
          />
          <Input
            value={schoolDate1}
            type='date' 
            required={true}
            handleChange={(e) => setResumeData({...resumeData, schoolDate1: e.target.value})}
            name={schoolDate1}
          />
          <Input
            value={cgpa}
            type='text'
            required={true} 
            placeholder='Cgpa*'
            handleChange={(e) => setResumeData({...resumeData, cgpa: e.target.value})}
            name={cgpa}
          />
          <Input
            value={qualification}
            type='text'
            maxLength={40} 
            placeholder='Qualification*'
            handleChange={(e) => setResumeData({...resumeData, qualification: e.target.value})}
            required={true}
            name={qualification}
          />
          <Input
            value={degree1}
            type='text'
            placeholder='Degree*'
            required={true}
            width={true} 
            handleChange={(e) => setResumeData({...resumeData, degree1: e.target.value})}
            name={degree1}
          />
        </div>
        {/* cgpa and school and date */}
        <div className='pb-7 flex flex-wrap items-center justify-evenly mt-3'>
          <Input
            value={schoolName}
            type='text'
            required={false} 
            placeholder='school'
            handleChange={(e) => setResumeData({...resumeData, schoolName: e.target.value})}
            name={schoolName}
          />
           <Input
            value={schoolDate2}
            type='date'
            required={false} 
            right={true}
            handleChange={(e) => setResumeData({...resumeData, schoolDate2: e.target.value})}
            name={schoolDate2}
          />
          <Input
            value={percentage}
            type='text'
            required={false} 
            del={true}
            right={true}
            placeholder='Percentage'
            handleChange={(e) => setResumeData({...resumeData, percentage: e.target.value})}
            name={percentage}
          />
          <Input
            value={schoolQualification}
            type='text' 
            maxLength={30}
            placeholder='Qualification'
            del={true}
            handleChange={(e) => setResumeData({...resumeData, schoolQualification: e.target.value})}
            required={false}
            name={schoolQualification}
          />
          <Input
            value={degree2}
            type='text'
            width={true}
            del={false}
            placeholder='Degree'
            required={false} 
            handleChange={(e) => setResumeData({...resumeData, degree2: e.target.value})}
            name={degree2}
          />
        </div>
      </section>
      <div className="flex absolute bottom-8 right-5 minscreen:right-7 gap-4 cursor-pointer text-2xl">
        <Link to='/step1'><p className='text-white hover:text-gray-600'>Back</p></Link>
        {canNext2 ? 
          <Link to='/step3'>
            <p className='text-white hover:text-gray-600'>Next</p>
            </Link> : ''
        }
      </div>
    </main>
  )
}

export default Step2