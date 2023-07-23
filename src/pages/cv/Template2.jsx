import Resume2 from '../../components/Resume2'
import useResumeContext from '../../context/useResumeContext'
import { ResumeNav } from '../../components/ResumeNav'

const Template2 = () => {
  const {handleLogout, theme} = useResumeContext();

  return (
    <main className={`sticky top-0 ${theme == 'light' ? 'bg-slate-50' : 'bg-black'} z-50 border border-b-1 overflow-hidden border-r-0 border-l-0 border-t-0 border-x-8 flex flex-col`}>
      
      <ResumeNav />

      <div className='flex midscreen:flex-col justify-center midscreen:pl-0 pl-6'>
        <Resume2 />
      </div>
    </main>
  )
}

export default Template2