import React from 'react'
import './styles.css'
 
import {AiFillGithub} from 'react-icons/ai'

export function FooterSection(): React.ReactElement {
  return (
    <>
      <footer>
        <div className='footer-conetent'>
          <div className='about'>
            <p><strong>About Locus:</strong></p>
            <small>
            An open source app provides a real time communication service over video, voice and text
            </small>
          </div>
          <div className='contribute'>
            <h3>Contribute:</h3>
            <a href='https://github.com/hamzagh1998/locus' target='_blank' rel='noreferrer'>
              <p><AiFillGithub /> GitHub</p>
            </a>
          </div>
        </div>
        <div className='copy'>
          <p>&copy; Locus 2022</p>
        </div>
      </footer>
    </>
  )
}
