import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResumeDataProvider from './context/ResumeData';
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={
        <ResumeDataProvider>
          <App />
        </ResumeDataProvider>
        }/>
      </Routes>
    </Router>
  </React.StrictMode>
)
