import React, {useState} from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import useResumeContext from '../../context/useResumeContext';

const Login = () => {
  const [reveal, setReveal] = useState(false);
  const { userEmail, password, user, setUser, loading, error, setError, handleLogin, success, setSignIn, setSignUp} = useResumeContext();

  return (
    <main className='z-50 absolute top-28 left-[35%] midscreen:left-[15%] max-h-64 midscreen:w-[55%] w-[30%]'>
      <div 
        onClick={() => setError('')}
        className='text-sm p-2 flex items-center flex-col gap-2 h-full w-full bg-slate-900 text-white rounded-md shadow-2xl'>
        <h1 className='flex-none uppercase font-[600] border-gray-400 text-lg'>Sign In</h1>
        <form onSubmit={handleLogin} className='font-medium flex-auto flex flex-col w-full p-1'>
        {success ? <p className='capitalize w-full text-center text-[20px] text-green-600'>Registration successful</p> : ''}
        {error ? <p className='w-full capitalize text-center text-[20px] text-red-600'>{error}</p> : ''}
          <div className='flex flex-col w-full pb-2'>  
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id='email'
              required
              value={userEmail}
              placeholder='email'
              autoComplete='off'
              onChange={(e) => setUser({...user, userEmail: e.target.value})}
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
              placeholder='password'
              autoComplete='off'
              onChange={(e) => setUser({...user, password: e.target.value})}
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
            type='submit'
            className='w-fill p-1 pl-2 pr-2 capitalize bg-green-500 rounded-sm mt-2 cursor-pointer hover:bg-green-400 active:bg-green-500 transition duration-150 ease-in-out text-base'  
          >{loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p 
          onClick={() => {
            setSignUp(true)
            setSignIn(false)
            setError('')
          }}
          className='cursor-pointer hover:font-medium'
        >Dont have an account? Sign up</p>
      </div>
    </main>
  )
}

export default Login