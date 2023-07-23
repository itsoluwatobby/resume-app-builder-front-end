import React, {useState} from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useResumeContext from '../../context/useResumeContext';

const Register = () => {
  const [reveal, setReveal] = useState(false);
  const { username, userEmail, password, user, setUser, loading, error, handleRegister, setSignIn, setSignUp, setError} = useResumeContext();

  return (
    <main className='absolute top-28 left-[35%] midscreen:left-[15%] max-h-64 midscreen:w-[60%] w-[35%]'>
      <div 
        onClick={() => setError('')}
        className='text-sm p-2 flex items-center flex-col gap-2 h-full w-full bg-slate-900 text-white rounded-md shadow-2xl'>
        <h1 className='flex-none uppercase font-[600] text-lg'>User Registration</h1>
        <form onSubmit={handleRegister} className='font-medium flex-auto flex flex-col w-full p-1'>
          <div className='flex flex-col w-full pb-2'>  
          {loading ? <p className='w-full text-center text-[18px] text-green-600'>Registration in progress...</p> : ''}
          {error ? <p className='capitalize w-full text-center text-[20px] text-red-600'>{error}</p> : ''}
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              required
              value={username}
              onChange={(e) => setUser({...user, username: e.target.value})}
              id='username'
              placeholder='username'
              autoComplete='off'
              className='text-black shadow-lg border-none w-full focus:outline-none rounded-sm pl-2 p-2'
            />
          </div>
          <div className='flex flex-col w-full pb-2'>  
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id='email'
              required
              value={userEmail}
              onChange={(e) => setUser({...user, userEmail: e.target.value})}
              placeholder='email@gmail.com'
              autoComplete='off'
              className='text-black shadow-lg border-none w-full focus:outline-none rounded-sm pl-2 p-2'
            />
          </div>
          <div className='flex flex-col w-full pb-2 relative'>  
            <label htmlFor="password">Password:</label>
            <input 
              type={reveal ? 'text' : 'password'} 
              id='password'
              required
              value={password}
              onChange={(e) => setUser({...user, password: e.target.value})}
              placeholder='************'
              autoComplete='off'
              className='text-black shadow-lg border-none w-full focus:outline-none rounded-sm pl-2 p-2'
            />
            {reveal ?
              <AiFillEyeInvisible 
                className='cursor-pointer text-2xl text-gray-800 absolute right-1 bottom-4'
                onClick={() => setReveal(prev => !prev)}  
              />
                :
              <AiFillEye 
                className='cursor-pointer text-2xl text-gray-800 absolute right-1 bottom-4'
                onClick={() => setReveal(prev => !prev)}  
              />
            }
          </div>
          <button 
          onClick={() => setError(false)}
            type='submit'
            className='w-fill p-1.5 pr-2 pl-2 bg-green-500 rounded-sm mt-2 cursor-pointer hover:bg-green-400 active:bg-green-500 transition duration-150 ease-in-out text-[18px]'  
          >Sign Up</button>
        </form>
        <p
          onClick={() => {
            setError('')
            setSignUp(false)
            setSignIn(true)
          }} 
          className='cursor-pointer hover:font-medium'
        >Already have an account? Sign in</p>
      </div>
    </main>
  )
}

export default Register