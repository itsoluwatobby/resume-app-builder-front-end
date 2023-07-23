import { Link } from 'react-router-dom';
import Input from '../components/Input';
import useResumeContext from '../context/useResumeContext';

const Step5 = () => {
  const {fullName, gender, status, nationality, dateOfBirth, languageProficiency, resumeData, userImage, canNext5, uploading, setResumeData, setDisplay} = useResumeContext();

  return (
    <main 
      onClick={() => setDisplay(false)}
      className='pb-8 relative step'>
      <h1 className='text-white text-center pt-10 pb-5 text-4xl uppercase'>Personal Details</h1>
      {uploading ? <p className='w-full text-center text-[20px] text-green-600'>Uploading image...</p> : ''}
      <section>
        <div className='relative pb-4 flex flex-col items-center minscreen:gap-3 w-full mt-0 justify-evenly'>
          <Input
            required={true}
            value={fullName}
            type='text' 
            width={true} 
            placeholder='Full Name*'
            handleChange={(e) => setResumeData({...resumeData, fullName: e.target.value})}
            name={fullName}
          />
          <Input
            required={true}
            type='file' 
            width={true}
            accepts='image/*.{jpg,png,jpeg}'
            handleChange={(e) => setResumeData({...resumeData, userImage: e.target.files[0]})}
            name={userImage}
          />
          <label htmlFor="dateOfBirth" className='absolute text-white midscreen:left-5 midscreen:top-[122px] minscreen:top-[150px] top-[116px] left-10 font-[600]'>Date Of Birth:</label>
          <Input
            required={true}
            value={dateOfBirth}
            width={true} 
            type='date' 
            handleChange={(e) => setResumeData({...resumeData, dateOfBirth: e.target.value})}
            name={dateOfBirth}
          />
          <select 
            name="gender"
            onChange={(e) => setResumeData({...resumeData, gender: e.target.value})}
            className='w-[94vw] border border-3 border-gray-400 rounded-md h-8 midscreen:w-[90vw] mt-3 mb-3 focus:outline-none text-black'
            required={true}
            value={gender}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select 
            name="status"
            onChange={(e) => setResumeData({...resumeData, status: e.target.value})}
            className='text-black w-[94vw] border border-3 border-gray-400 rounded-md h-8 midscreen:w-[90vw] mt-3 mb-3 focus:outline-none'
            required={false}
            value={status}
          >
            <option value="" className='opacity-2'>Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
          <Input
            required={true}
            value={nationality}
            type='text'
            width={true} 
            placeholder='Nationality*'
            handleChange={(e) => setResumeData({...resumeData, nationality: e.target.value})}
            name={nationality}
          />
          <select 
            name="languageProficiency"
            onChange={(e) => setResumeData({...resumeData, languageProficiency: e.target.value})}
            className='text-black w-[94vw] border border-3 border-gray-400 rounded-md h-8 midscreen:w-[90vw] mt-3 mb-3 focus:outline-none'
            required={true}
            value={languageProficiency}
          >
            <option value="" className='opacity-2'>Language Proficiency</option>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="native">Native</option>
          </select>
        </div>
      </section>
      <div className="mt-3 flex absolute bottom-5 right-5 gap-4 cursor-pointer text-2xl">
        <Link to='/step4'><p className='text-white hover:text-gray-600'>Back</p></Link>
        {canNext5 ? 
          <Link to='/step6'>
            <p className='text-white hover:text-gray-600'>Next</p>
            </Link> : ''
        }
      </div>
    </main>
  )
}

export default Step5