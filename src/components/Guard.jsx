import React from 'react'
import { Navigate } from 'react-router-dom'

const Guard = ({children}) => {
    const token = localStorage.getItem('token')
    if(token) return children
    else return <Navigate to={'/login'} />

}

export default Guard