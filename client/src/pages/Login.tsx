import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Auth } from '../api/auth';
import { LoginObj } from '../interfaces/auth.interface';
import { tryToCatch } from '../utils/tryToCatch';
import { LoginCard } from '../components/login/LoginCard';

import { TokenContext } from '../store/token.conetxt';


export function Login(): React.ReactElement {

  const token = useContext(TokenContext)
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null >(null);
  
  const submitHandler = async (payload: LoginObj) => {
    if (payload.username && payload.password) {
      const [error, res] = await tryToCatch(Auth.login, payload);
      if (error) {
        setErrorMessage(error.detail);
      } else {
        localStorage.setItem('token', res.data.detail);
        token.setToken(res.data.detail)
        navigate('/messages');
      }
    } else {
      setErrorMessage('username and password are required!');
    }
  };

  return <LoginCard submitHandler={submitHandler} error={errorMessage} />;
}
