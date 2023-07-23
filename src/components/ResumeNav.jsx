import { Link } from 'react-router-dom'
import { BsMoonStars, BsSun } from 'react-icons/bs';
import useResumeContext from '../context/useResumeContext'

export const ResumeNav = () => {
  const {handleLogout, theme, setTheme} = useResumeContext();

  return (
      <nav className={`sticky top-0 z-50 ${theme === 'light' ? 'bg-slate-50' : 'bg-black'} midscreen:p-2 pt-2 pb-2 pr-8 pl-8 justify-between flex-none text-center flex items-center`}>
        <Link to='/'>
          <h1 
            title='Home Page'
            className='text-lg first-letter:text-4xl font-serif flex-auto minscreen:text-sm minscreen:first-letter:text-xl'
            >RESUME BUILDER
          </h1>
        </Link>

        <div className='text-xl minscreen:text-base'>
          {
            theme == 'light' ?
              <BsMoonStars 
                className='cursor-pointer hover:opacity-70 transition-all'
                onClick={() => setTheme('dark')}
              />
            :
              <BsSun 
                className='cursor-pointer hover:opacity-70 transition-all'
                onClick={() => setTheme('light')}
              />
          }
        </div>

        <div className='flex items-center justify-between font-serif gap-4 relative minscreen:text-sm'>
            <Link to='/'>
              <p className={`font-serif hover:opacity-90 cursor-pointer transition-all active:opacity-100`}>Home</p>
            </Link>
            <Link to='/step1'>
              <p className={`font-serif hover:opacity-90 cursor-pointer transition-all active:opacity-100`}>Form</p>
            </Link>
            <p 
            onClick={handleLogout}
            className={`font-serif hover:opacity-90 cursor-pointer transition-all active:opacity-100`}>Logout</p>
        </div>
      </nav>
  )
}
