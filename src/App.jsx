import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Step6 from "./pages/Step6";
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Template1 from "./pages/cv/Template1";
import Template2 from "./pages/cv/Template2";
import Samples from "./pages/cv/Samples";
import useResumeContext from "./context/useResumeContext";

function App() {
  const { theme } = useResumeContext()
  return (
    <main className={`min-h-screen w-full ${theme === 'light' ? 'bg-slate-50 text-black' : 'dark:bg-black text-white'} transition-all`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />
            <Route path="/step5" element={<Step5 />} />
            <Route path="/step6" element={<Step6 />} />
          </Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/samples" element={<Samples />} />
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
