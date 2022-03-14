import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Auth } from '../api/auth';
import { RegisterObj } from '../interfaces/auth.interface';
import { tryToCatch } from '../utils/tryToCatch';
import { RegisterCard } from '../components/register/RegisterCard';

export function Register() {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null >(null);

  const submitHandler = async (payload: RegisterObj) => {
    if (payload.username && payload.firstName && payload.lastName && payload.gender) {
      const [error, res] = await tryToCatch(Auth.register, payload);
      if (error) {
        setErrorMessage(error.detail);
      } else if (res) {
        navigate('/login');
      }
    } else {
      setErrorMessage('please fill out all the fields!');
    };
  };

  return <RegisterCard submitHandler={submitHandler} error={errorMessage} />;
};
