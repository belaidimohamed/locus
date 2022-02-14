import React from 'react'
import './styles.css'
import easy from '../../assets/easy.png'
import secure from '../../assets/secure.png'
import fast from '../../assets/fast.png'
import social from '../../assets/social.png'
import open from '../../assets/open.png'
import powerful from '../../assets/powerful.png'

export function ContentSection(): React.ReactElement {
  return (
    <>
      <div className='conetnt-container'>
        <h3>Why Locus?</h3>
        <hr />
        <div className='main-body'>
          <div className='easy'>
            <img className="spc" src={easy} alt='easy' />
            <h3>Easy</h3>
            <p>
              <strong>Locus</strong> 
              &nbsp; is so easy to use, you already know how to use it.
            </p>
          </div>
          <div className='private'>
            <img className="spc" src={secure} alt='private' />
            <h3>Private</h3>
            <p>
              <strong>Locus</strong>
              &nbsp; messages are encrypted and can permanently deleted.
            </p>
          </div>
          <div className='fast'>
            <img className="spc" src={fast} alt='fast' />
            <h3>Fast</h3>
            <p>
              <strong>Locus</strong>
              &nbsp; set up a peer to peer connection for faster communication.
            </p>
          </div>
          <div className='social'>
            <img className="spc" src={social} alt='social' />
            <h3>Social</h3>
            <p>
              <strong>Locus</strong>
              &nbsp; users can hold up unlimited number of friends.
            </p>
          </div>
          <div className='powerful'>
            <img className="spc" src={powerful} alt='powerful' />
            <h3>Powerful</h3>
            <p>
              <strong>Locus</strong>
              &nbsp; has no limits on the size of your chats.
            </p>
          </div>
          <div className='open'>
            <img className="spc" src={open} alt='open' />
            <h3>Open</h3>
            <p>
              <strong>Locus</strong>
              &nbsp; code source is free for everyone
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
