import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logreg from '../../assets/logreg.jpg'
import locus1 from '../../assets/locus1.png'

interface props {
  submitHandler: Function;
  error: string | null ;
};

export function LoginCard({submitHandler, error}: props): React.ReactElement {

  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <>
      <div className='login-card'>
        <Link to='/'>
          <div className='logo'>
            <img className='logo' src={locus1} alt='logo' />
          </div>
        </Link>
        <div className='card'>
          <h1 className='title'>Login</h1>
          <input type='text' 
                placeholder='username' 
                value={username}
                onChange={e => setUsername(e.target.value)} 
                required
          />
          <input type='password' 
                placeholder='password' 
                value={password}
                onChange={e => setPassword(e.target.value)} 
                required
          />
          <button type='button' className='btn login-submit' onClick={() => submitHandler({username, password})}>
            Login
          </button>
          <p className='error'>{error}</p>
          <p className='redirect'>Don't have an account? 
           &nbsp; <Link to='/register'>Register</Link>
          </p>
        </div>
        <img className='bg-img' src={logreg} alt='bg' />
      </div>
    </>
  )
}

