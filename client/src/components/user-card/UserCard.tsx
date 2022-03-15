import React from 'react'
import './styles.css'

export function UserCard({users}: any) {
  
  return (
    <div className='users-container'>
      {
        users && users.map((user: any) => (
          <div className="user-card">
            {/* <img src={user.avatar} alt='avatar' /> */}
            <p>{user.firstName}</p>
          </div>
        ))
      }
    </div>
  )
}
