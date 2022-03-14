import React from 'react';
import { Link } from 'react-router-dom';

export function ProfileSideBar({textColor}: any): React.ReactElement {
  return (
    <div className="side-bar-conetnt">
      <p><Link style={{color: textColor}} to="about-me">About me</Link></p>
      <p><Link style={{color: textColor}} to="my-friends">Friends</Link></p>
      <p><Link style={{color: textColor}} to="blocks">Manage Blocks</Link></p>
      <p><Link style={{color: textColor}} to="security">Security</Link></p>
    </div>
  );
};
