import React from 'react';
import { Link } from 'react-router-dom';

export function Friends({friends}: any): React.ReactElement {
  return (
    <div>
      <h2>Friends:</h2>
      {friends.length === 0 && (
        <>
          <p>You don't have any friends for now!</p>
          <Link to='/users'>Add new friends</Link>
        </>
      )}
    </div>
  );
};
