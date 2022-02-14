import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Auth } from '../api/auth';
import { LoginObj } from '../interfaces/auth.interface';
import { tryToCatch } from '../utils/tryToCatch';
import { LoginCard } from '../components/login/LoginCard';


export function Login(): React.ReactElement {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null >(null)
  
  const submitHandler = async (payload: LoginObj) => {
    if (payload.username && payload.password) {
      const [error, res] = await tryToCatch(Auth.login, payload)
      if (error) {
        setErrorMessage(error.detail);
      } else {
        localStorage.setItem('token', res.data.detail)
        navigate('/')
      }
    } else {
      setErrorMessage('username and password are required!');
    }
    
  };

  return <LoginCard submitHandler={submitHandler} error={errorMessage} />;
}
