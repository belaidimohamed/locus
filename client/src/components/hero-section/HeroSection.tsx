import React from 'react'
import { Link } from 'react-router-dom'

import bgimg1 from '../../assets/bgimg1.jpg'
import logo from '../../assets/locus1.png'
import './styles.css'

export function HeroSection(): React.ReactElement {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='logo'>
            <img className='mg-logo' src={logo} alt='locus-logo' />
          </div>
          <div className='top-center'>
            <h1>YOUR FREE SPACE ...</h1>
            <p>...a space where you can easily talk with friends and make new ones</p>
            <h2>JOIN US TODAY</h2>
            <div className='actions-container'>
              <Link to='/login'>
                <button type='button' className='btn login'>
                  <span>Login</span>
                </button>
              </Link>
              <Link to='/register'>
                <button type='button' className='btn register'>
                  <span>Register</span>
                </button>
              </Link>
            </div>
          </div>
          <img className='hero-img' src={bgimg1} alt='bgimg1' />
        </div>
      </section>
    </>
  )
}
