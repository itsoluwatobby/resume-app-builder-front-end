import Resume1 from '../../components/Resume1'
import useResumeContext from '../../context/useResumeContext'
import { ResumeNav } from '../../components/ResumeNav';

const Template1 = () => {
  const {handleLogout, theme, setTheme} = useResumeContext();

  return (
    <main className={`sticky top-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-black'} z-50 border border-b-1 border-r-0 overflow-hidden border-l-0 border-t-0 border-x-8 flex flex-col`}>
     
      <ResumeNav />

      <div className='flex midscreen:flex-col justify-center midscreen:pl-0 pl-6'>
        <Resume1 />
      </div>
    
    </main>
  )
}

export default Template1