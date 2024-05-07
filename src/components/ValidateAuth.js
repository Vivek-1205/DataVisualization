import React from 'react'
import { UseAuth } from '../Auth'
import { Navigate } from 'react-router-dom';

const ValidateAuth = ({children}) => {
const auth = UseAuth();
  return (
    // auth.userId===null?<Navigate to="/"/>:children
    children
  )
}
export default ValidateAuth
