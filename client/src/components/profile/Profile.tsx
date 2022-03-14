import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './styles.css'

import { ProfileSideBar } from './ProfileSideBar'
import { Friends } from './Friends'
import { About } from './About'
import { Blocks } from './Blocks'

export function Profile({userInfo, textColor, submitHandle}: any): React.ReactElement {    

  return (
    <>
      {userInfo && (
        <div className='profile-container' style={{color: textColor}}>
          <div className="side-bar">
            <ProfileSideBar textColor={textColor} />
          </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<SelectedComponent />}>
              <Route path="about-me" element={<About userInfo={userInfo} submitHandle={submitHandle} />} />
              <Route path="my-friends" element={<Friends friends={userInfo.friends} />} />
              <Route path="blocks" element={<Blocks blocks={userInfo.blocks} />} />
            </Route>
          </Routes>
        </div>
      </div>
      )}
    </>
  )
}

function SelectedComponent() {
  return <Outlet />
}
