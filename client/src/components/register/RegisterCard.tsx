import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import locus1 from '../../assets/locus1.png'
import logreg from '../../assets/logreg.jpg'

interface Props {
  submitHandler: Function;
  error: string | null;
};

export function RegisterCard({submitHandler, error}: Props): React.ReactElement {

  const [username, setUsername] = useState<string>()
  const [firstName, setFirstName] = useState<string>()
  const [lastName, setLastName] = useState<string>()
  const [gender, setGender] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <>
      <div>
        <Link to='/'>
          <div className='logo'>
            <img className='logo' src={locus1} alt='logo' />
          </div>
        </Link>
        <div className='register-card'>
          <h2 className='title'>Create new account</h2>
          <input type='text' 
                  placeholder='username' 
                  value={username} 
                  onChange={e => setUsername(e.target.value.toLocaleLowerCase())} 
                  required
          />
          <input type='text' 
                  placeholder='first name' 
                  value={firstName} 
                  onChange={e => setFirstName(e.target.value.toLocaleLowerCase())} 
                  required
          />
           <input type='text' 
                  placeholder='first name' 
                  value={lastName} 
                  onChange={e => setLastName(e.target.value.toLocaleLowerCase())} 
                  required
          />
          <select name="gender" defaultValue={'DEFAULT'} onChange={e => setGender(e.target.value.toLocaleLowerCase())}>
            <option value="DEFAULT" disabled hidden>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="bottts">Robot</option>
          </select>
          <input type='password' 
                  placeholder='password' 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required
          />
          <button type='button' 
                  className='btn register-submit' 
                  onClick={() => submitHandler({username, firstName, lastName, gender, password})}
          >
            Register
          </button>
          <p className='error'>{error}</p>
          <p className='redirect'>Already have an account? 
           &nbsp; <Link to='/login'>Login</Link>
          </p>
        </div>
        <img className='bg-img' src={logreg} alt='bg' />
      </div>
    </>
  )
}
