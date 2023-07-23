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
      className='step midscreen:pb-10 minscreen:pb-4 pb-10 relative h-full'>
      <h1 className='text-center minscreen:pt-6 pt-14 pb-4 text-4xl text-white'>Your Details</h1>
      <section className='h-full p-4'>
        {/* firstname and lastname */}
        <div className='flex items-center w-full mt-2 justify-evenly minscreen:flex minscreen:flex-col'>
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
        <div className='flex items-center w-full justify-evenly minscreen:flex minscreen:flex-col'>
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
        <div className='flex items-center w-full justify-evenly minscreen:flex minscreen:flex-col'>
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
        <div className='flex items-center w-full justify-evenly minscreen:flex minscreen:flex-col'>
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
        <div className='flex items-center w-full justify-evenly minscreen:flex minscreen:flex-col '>
          <Input
            value={facebook}
            required={false}
            type='text' 
            del={true}
            placeholder='Facebook'
            handleChange={(e) => setResumeData({...resumeData, facebook: e.target.value})}
            name={facebook}
          />
          <Input
            value={instagram}
            required={false}
            type='text' 
            del={true}
            placeholder='Instagram'
            handleChange={(e) => setResumeData({...resumeData, instagram: e.target.value})}
            name={instagram}
          />
        </div>
      </section>
      <div className="flex absolute right-5 gap-4 minscreen:bottom-[35px] cursor-pointer text-2xl">
        {/* <Link to='/'><p className='text-white hover:text-gray-600'>Back</p></Link> */}
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