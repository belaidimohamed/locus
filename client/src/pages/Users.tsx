import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../api/user';
import { TokenContext } from '../store/token.conetxt';
import { ThemeContext } from '../store/theme.context'

import { tryToCatch } from '../utils/tryToCatch';
import { UserCard } from '../components/user-card/UserCard';

export function Users(): React.ReactElement {

  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const tokenContext = useContext(TokenContext);

  const [users, setUsers] = useState<Array<object> | null>(null);

  useEffect(() => {
    if (!tokenContext.token) return navigate('/login');
    (async () => {
      const [error, res] = await tryToCatch(User.getUsers, tokenContext.token);
      if (error) {
        console.log(error);
      }; setUsers(res.data.detail);
    })();
  }, []);
  
  return (
    <div className="users-container" style={{backgroundColor: theme.backgroundColor}}>
      <UserCard users={users} />
    </div>
  );
};
