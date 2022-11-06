import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
console.log(loggedIn)
  return loggedIn ? <Outlet /> : <Navigate to={'/'}/>
}

export default PrivateRoute