import React from 'react'
import './style.css'
import { BiMessageDetail , BiMenu} from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SideNav() {
  const friends = []
  for (let index = 0; index < 8; index++) {
    friends.push({
      name: "ahmed",
      image: "https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png",
      message: 'No message found.',
      messageTime: '11.15'
    })
  }
  console.log(friends)

  return (
    <div className='sideNav-container'>

      <div className='settings-nav'>
        <img className='profile-image' src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="" />
        <div className='icons-container'>
          <BiMessageDetail className='icons' size={28} />
          <BiMenu className='icons' size={33} />
        </div>
      </div>

      <div className='search-box'>
        <div className='input-wrapper'>
          <AiOutlineSearch className='search-icon' size={25} />
          <input className='message-input' placeholder='Search message' />
        </div>
      </div>
      
      {friends.map(friend => {
        return (
          <>
            < div className='friend-container active' >
              <img className='profile-image message-photo' src={friend.image} alt="" />
              <div className='friend-text'>
                <span className='friend-name'>{friend.name}</span>
                <p className="text-muted">{friend.message}</p>
              </div>
              <span className='text-muted small'>{ friend.messageTime }</span>
            </div>
            <hr className='hr' />

          </>
        )
      })}
      
    </div>
  )
}
