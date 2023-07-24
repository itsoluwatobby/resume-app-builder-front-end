import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

  return loggedIn ? <Outlet /> : <Navigate to={'/'}/>
}

export default PrivateRoute