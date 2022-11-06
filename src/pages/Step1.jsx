import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useResumeContext from '../context/useResumeContext';

const Step1 = () => {
  const {firstName, lastName, email, phoneNumber, address, gitHub, linkedIn, twitter, facebook, instagram, resumeData, setResumeData, setDisplay, canNext1} = useResumeContext();

  return (
    <main 
      onClick={() => setDisplay(false)} 
      className='step h-[calc(100vh-150px)] pb-4 relative'>
      <h1 className='text-center pt-14 pb-5 text-4xl text-white'>Your Details</h1>
      <section>
        {/* firstname and lastname */}
        <div className='flex items-center w-full mt-2 justify-evenly'>
          <Input
            value={firstName}
            required={true}
            type='text' 
            placeholder='First name*'
            handleChange={(e) => setResumeData({...resumeData, firstName: e.target.value})}
            name={firstName}
          />
          <Input
            value={lastName}
            required={true}
            type='text' 
            placeholder='Last name*'
            handleChange={(e) => setResumeData({...resumeData, lastName: e.target.value})}
            name={lastName}
          />
        </div>
        {/* email and phone number */}
        <div className='flex items-center w-full justify-evenly'>
          <Input
            value={email}
            required={true}
            type='email' 
            placeholder='Email*'
            handleChange={(e) => setResumeData({...resumeData, email: e.target.value})}
            name={email}
          />
          <Input
            value={phoneNumber}
            required={true}
            type='phone' 
            placeholder='Phone Number*'
            handleChange={(e) => setResumeData({...resumeData, phoneNumber: e.target.value})}
            name={phoneNumber}
          />
        </div>
        {/* address and gitHub */}
        <div className='flex items-center w-full justify-evenly'>
          <Input
            value={address}
            required={false}
            type='address' 
            placeholder='Address'
            handleChange={(e) => setResumeData({...resumeData, address: e.target.value})}
            name={address}
          />
          <Input
            value={gitHub}
            required={false}
            type='text' 
            placeholder='GitHub'
            handleChange={(e) => setResumeData({...resumeData, gitHub: e.target.value})}
            name={gitHub}
          />
        </div>
        {/* linkedin and twitter */}
        <div className='flex items-center w-full justify-evenly'>
          <Input
            value={linkedIn}
            required={false}
            type='text' 
            placeholder='LinkedIn'
            handleChange={(e) => setResumeData({...resumeData, linkedIn: e.target.value})}
            name={linkedIn}
          />
          <Input
            value={twitter}
            required={false}
            type='text' 
            placeholder='Twitter'
            handleChange={(e) => setResumeData({...resumeData, twitter: e.target.value})}
            name={twitter}
          />
        </div>
        {/* facebook and instagram */}
        <div className='flex items-center w-full justify-evenly'>
          <Input
            value={facebook}
            required={false}
            type='text' 
            placeholder='Facebook'
            handleChange={(e) => setResumeData({...resumeData, facebook: e.target.value})}
            name={facebook}
          />
          <Input
            value={instagram}
            required={false}
            type='text' 
            placeholder='Instagram'
            handleChange={(e) => setResumeData({...resumeData, instagram: e.target.value})}
            name={instagram}
          />
        </div>
      </section>
      <div className="flex absolute right-5 gap-4 cursor-pointer text-2xl">
        <Link to='/'><p className='text-white hover:text-gray-600'>Back</p></Link>
        {canNext1 ? 
          <Link to='/step2'>
            <p className='text-white hover:text-gray-600'>Next</p>
            </Link> : ''
        }
      </div>
    </main>
  )
}

export default Step1