import React from 'react'
import useResumeContext from '../context/useResumeContext'
import {FaTimesCircle} from 'react-icons/fa'

const Step6 = () => {
  const {
    firstName, lastName, email, phoneNumber, address, gitHub, linkedIn, twitter, facebook, instagram, college, schoolDate1, cgpa, qualification, degree1, schoolName, schoolDate2, percentage, schoolQualification, degree2, submitData, skill1, skill2, skill3, skill4, interest1, interest2, interest3, interest4, careerObjective, workshop1, workshop2, title1, link1, description1, title2, link2, description2, fullName, gender, status, nationality, dateOfBirth, languageProficiency, imagePreview, confirm, setConfirm, loading, error, setDisplay, setError
  } = useResumeContext();

  return (
    <main onClick={() => setDisplay(false)} className='mt-14 min-h-[85vh] p-4 minscreen:mt-28'>
      <div className='list pr-2 pl-2 pt-4 pb-4 border-2 border-gray-300 h-[80vh] shadow-lg overflow-y-scroll rounded-md relative'>
        <div className='absolute top-0 right-0 h-[130px] w-[110px] shadow-lg bg-transparent rounded-md border-4 border-white'>
          <img src={imagePreview ? imagePreview : ''} alt="passport" className='h-[100%] w-[100%]'/>
        </div>
        <p className='mt-3 mb-2 text-center text-2xl border-b-2 border-gray-400 capitalize'>Your Details</p>
        <div className='flex w-full p-1 pt-2 gap-2 border-b-2'>
          <p className='font-medium capitalize'>First Name*:</p>
          <p className='capitalize'>{firstName}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Last Name*:</p>
          <p className='capitalize'>{lastName}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Email*:</p>
          <p>{email}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Phone Number*:</p>
          <p>{phoneNumber}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Address:</p>
          <p className='capitalize'>{address}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>GitHub:</p>
          <p>{gitHub}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>LinkedIn:</p>
          <p>{linkedIn}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Twitter:</p>
          <p>{twitter}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Facebook:</p>
          <p>{facebook}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Instagram:</p>
          <p>{instagram}</p>
        </div>
        <p className='mt-3 mb-2 text-center text-2xl border-b-2 border-gray-400 capitalize'>Education Information</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>College*:</p>
          <p className='capitalize'>{college}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>School Date*:</p>
          <p className='capitalize'>{schoolDate1}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>CGPA*:</p>
          <p className='capitalize'>{cgpa}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Qualification*:</p>
          <p className='capitalize'>{qualification}</p>
        </div>
        <div className='pt-2 flex break-all w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Degree*:</p>
          <p className='capitalize'>{degree1}</p>
        </div>
        <p className='mt-3 mb-2 text-center text-2xl border-b-2 border-gray-400 capitalize'>Education Information 2</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>School:</p>
          <p className='capitalize'>{schoolName}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>School Date:</p>
          <p className='capitalize'>{schoolDate2}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Percentage:</p>
          <p className='capitalize'>{percentage}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Qualification:</p>
          <p className='capitalize'>{schoolQualification}</p>
        </div>
        <div className='pt-2 flex flex-col break-all w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Degree:</p>
          <p className='capitalize'>{degree2}</p>
        </div>
        <p className='mt-3 mb-2 text-center text-2xl border-b-2 border-gray-400  capitalize'>Extra Details</p>
        <p className='mt-4 mb-2 text-left text-[18px] font-medium border-b-2 border-gray-400 capitalize'>Skills | Languages</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Skill 1*:</p>
          <p className='capitalize'>{skill1}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Skill 2*:</p>
          <p className='capitalize'>{skill2}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Skill 3:</p>
          <p className='capitalize'>{skill3}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Skill 4:</p>
          <p className='capitalize'>{skill4}</p>
        </div>
        <p className='mt-4 mb-2 text-left font-medium text-[18px] border-b-2 border-gray-400 capitalize'>Area of Interest</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Interest 1*:</p>
          <p className='capitalize'>{interest1}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Interest 2*:</p>
          <p className='capitalize'>{interest2}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Interest 3:</p>
          <p className='capitalize'>{interest3}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Interest 4:</p>
          <p className='capitalize'>{interest4}</p>
        </div>
        <p className='mt-4 mb-2 text-left font-medium text-[18px] border-b-2 border-gray-400 capitalize'>Career Objectives</p>
        <div className='pt-2 flex flex-col w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Career Objective*:</p>
          <p className='break-all'>{careerObjective}</p>
        </div>
        <p className='mt-4 mb-2 text-left font-medium text-[18px] border-b-2 border-gray-400 capitalize'>Workshop Attended</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Workshop 1*:</p>
          <p className='capitalize'>{workshop1}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Workshop 2:</p>
          <p className='capitalize'>{workshop2}</p>
        </div>
        <p className='mt-3 mb-2 text-center text-2xl border-b-2 border-gray-400 capitalize'>Project Details</p>
        <p className='mt-4 mb-2 text-left font-medium text-[18px] border-b-2 border-gray-400 capitalize'>Project 1</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Title*:</p>
          <p className='capitalize'>{title1}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Link*:</p>
          <p >{link1}</p>
        </div>
        <div className='pt-2 flex break-all w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Descriptiion*:</p>
          <p>{description1}</p>
        </div>
        <p className='mt-4 mb-2 text-left font-medium text-[18px] border-b-2 border-gray-400 capitalize'>Project 2</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Title:</p>
          <p className='capitalize'>{title2}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Link:</p>
          <p>{link2}</p>
        </div>
        <div className='pt-2 flex break-all w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Description:</p>
          <p>{description2}</p>
        </div>
        <p className='mt-3 mb-2 text-center text-2xl border-b-2 border-gray-400  capitalize'>Personal Details</p>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Full Name*:</p>
          <p className='capitalize'>{fullName}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Date of Birth*:</p>
          <p className='capitalize'>{dateOfBirth}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Gender*:</p>
          <p className='capitalize'>{gender}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium'>Status*:</p>
          <p className='capitalize'>{status}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Nationality*:</p>
          <p className='uppercase'>{nationality}</p>
        </div>
        <div className='pt-2 flex w-full p-1 gap-2 border-b-2'>
          <p className='font-medium capitalize'>Language Proficiency*:</p>
          <p className='capitalize'>{languageProficiency}</p>
        </div>
        {confirm ? (
            <div
              onClick={() => {
                setError('')
              }}
              className='z-50 fixed top-1/3 gap-3 midscreen:gap-0 midscreen:left-1/3 right-[20%] border-[3px] border-gray-300 bg-gray-200 rounded-lg shadow-2xl midscreen:w-[280px] w-[350px] p-4 midscreen:p-2 flex flex-col items-center'>
              <FaTimesCircle 
                onClick={() => {
                  setConfirm(false)
                  setError('')
                }}
                className='text-[24px] midscreen:text-[17px] cursor-pointer'/>
              <p className='capitalize font-[600] mb-3 '>{loading ? 'Form submission in progress...' : error ? error : 'Please confirm form submission'}</p>
              <button 
                onClick={submitData}
                className='bg-green-400 pr-6 pl-6 rounded-md p-2 text-[17px] cursor-pointer shadow-lg hover:opacity-80 active:opacity-100'>Confirm</button>
            </div>
          ) : ''
        }
      </div>
    </main>
  )
}

export default Step6

/*{loading ? <p className='w-full text-center text-[20px] text-green-600'>Registration in progress...</p> : ''} */