import { createContext, useState, useEffect } from "react";
import {resumeUrl} from "../features/api/axios";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const ResumeData = createContext({})

const ResumeDataProvider = ({children}) => {
  const navigate = useNavigate()
  const emailData = localStorage.getItem('email')
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [display, setDisplay] = useState(false)
  const [resumeData, setResumeData] = useState({
    firstName:'', lastName:'', email:'', phoneNumber:'', address:'', gitHub:'', linkedIn:'', twitter:'', facebook:'', instagram:'', college:'', schoolDate1:'', cgpa:'', qualification:'', degree1:'', schoolName:'', schoolDate2:'', percentage:'', schoolQualification:'', degree2:'', skill1: '', skill2:'', skill3:'', skill4:'', interest1:'', interest2:'', interest3:'', interest4:'', careerObjective:'', workshop1:'', workshop2:'', title1:'', link1:'', description1:'', title2:'', description2:'', link2:'', fullName:'', gender:'', status:'', nationality:'', dateOfBirth:'', languageProficiency:'', userImage: ''
  })
  const [savedData, setSavedData] = useState({});
  const [uploading, setUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [auth, setAuth] = useState({})
  const [error, setError] = useState(null)
  const getData = localStorage.getItem('email')
  const [user, setUser] = useState({
    username: '', userEmail: '', password: ''
  })
  const {username, userEmail, password} = user

  const {firstName, lastName, email, phoneNumber, address, gitHub, linkedIn, twitter, facebook, instagram, college, schoolDate1, cgpa, qualification, degree1, schoolName, schoolDate2, percentage, schoolQualification, degree2, skill1, skill2, skill3, skill4, interest1, interest2, interest3, interest4, careerObjective, workshop1, workshop2, title1, link1, description1, title2, link2, description2, fullName, gender, status, nationality, dateOfBirth, languageProficiency, userImage} = resumeData;

  useEffect(() => {
    let isMounted = true

    const validateImg = () => {
      if(userImage){
        if(userImage?.size >= 1048576){
          return alert('Max allowed file is 1mb')
        }else{
          isMounted && setImagePreview(URL.createObjectURL(userImage))
        }
      }else return
    }
    validateImg()

    return () => isMounted = false
  }, [userImage])

  const uploadPicture = async() => {
    const data = new FormData()
    data.append('file', userImage)
    data.append('upload_preset', 'dwb3ksib')
    try{
      setUploading(true)
      const response = await axios.post('https://api.cloudinary.com/v1_1/dr8necpxh/image/upload', data)
      const url = response.data?.url
      return url
    }catch(error){
      !error.response && setError('No server response')
      error.response && setError(error.message)
    }finally{
      setUploading(false)
    }
  }
  
  const handleRegister = async(e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
      const response = await resumeUrl.post('/user/register', {
        username, email: userEmail, password
      })
      setSignIn(true)
      setSignUp(false)
      setSuccess(true)
      setUser({ username: '', userEmail: '', password: '' })
    }
    catch(error){
      setLoading(false)
      !error.response && setError('No server resonse')
      error.response?.status === 400 && setError('All fields are required')
      error.response?.status === 409 && setError('Email already taken')
      error.response?.status === 500 && setError('internal server error')
    }finally{
      setLoading(false)
    }
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
      const response = await resumeUrl.post('/user/login', {
        email: userEmail, password
      })
      const {email} = response.data
      setAuth({email})
      localStorage.setItem('isLoggedIn', true)
      localStorage.setItem('email', email)
      setError('')
      setUser({ userEmail: '', password: '' })
      setSignIn(false)
      setSignUp(false)
    }
    catch(error){
      setLoading(false)
      !error.response && setError('No server resonse')
      error.response?.status === 400 && setError('All fields are required')
      error.response?.status === 403 && setError('Bad credentials')
      error.response?.status === 500 && setError('internal server error')
    }finally{
      setLoading(false)
    }
  }
  
  const handleLogout = async() => {
    try{
      await resumeUrl.get('/user/logout')
      setSavedData({})
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('email')
      setAuth({})
      navigate('/')
    }
    catch(error){
      !error.response && setError('No server resonse')
      error.response?.status === 500 && setError('internal server error')
    }
  }

  //get registered resume
  useEffect(() => {
    setLoading(true)
    let isMounted = true
    const fetchResume = async() => {
      try{
        const response = await resumeUrl.get(`/resume/fetch?email=${getData}`)
        setSavedData(response?.data)
      }
      catch(error){
        setLoading(false)
        !error.response && setError('No server resonse')
        error.response?.status === 400 && setError('resume not found')
        error.response?.status === 403 && setError('you do not have an account')
        error.response?.status === 500 && setError('internal server error')
      }finally{
        setLoading(false)
      }
    }
    fetchResume()

    return () => isMounted = false
  }, [auth?.email])

  const canNext1 = [firstName, lastName, email, phoneNumber].every(Boolean) 
  const canNext2 = [college, cgpa, qualification, degree1, schoolDate1].every(Boolean)
  const canNext3 = [skill1, skill2, interest1, interest2, careerObjective, workshop1].every(Boolean)
  const canNext4 = [title1, link1, description1].every(Boolean)
  const canNext5 = [fullName, userImage, nationality, gender, languageProficiency, dateOfBirth].every(Boolean)

  const submitData = async() => {
    setLoading(true)
    if(canNext1 && canNext2 && canNext3 && canNext4 && canNext5){
      try{
        const url = await uploadPicture()
        const resumeInput = {...resumeData, picture: url}
        const response = await resumeUrl.post(`/resume/create?email=${auth?.email}`, resumeInput)
        setSavedData(response?.data)
        navigate('/samples')
        setResumeData({})
      }
      catch(error){
        setLoading(false)
        !error.response && setError('No server resonse')
        error.response?.status === 401 && setError('you need to create an account first')
        error.response?.status === 403 && setError('you are not logged in')
        error.response?.status === 500 && setError('internal server error')
      }finally{
        setLoading(false)
      }
    }else{
      setLoading(false)
      setError("Form cannot be blank")
      return
    }
  }

  const value = {
    firstName, lastName, email, phoneNumber, address, gitHub, linkedIn, twitter, facebook, instagram, college, schoolDate1, cgpa, qualification, degree1, schoolName, schoolDate2, percentage, schoolQualification, degree2, submitData, skill1, skill2, skill3, skill4, interest1, interest2, interest3, interest4, careerObjective, workshop1, workshop2, title1, link1, description1, title2, link2, description2, fullName, gender, status, nationality, dateOfBirth, languageProficiency, setResumeData, resumeData, imagePreview, canNext1, canNext2, canNext3, canNext4, canNext5, signIn, signUp, setSignIn, setSignUp, user, setUser, username, userEmail, password, handleRegister, handleLogin, handleLogout, error, loading, auth, success, uploading, savedData, confirm, setConfirm, display, setDisplay, setError, emailData
  }

  return (
    <ResumeData.Provider value={value}>
      {children}
    </ResumeData.Provider>
  )
}

export default ResumeDataProvider;
