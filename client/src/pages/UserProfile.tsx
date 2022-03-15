import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../api/user';
import { TokenContext } from '../store/token.conetxt';
import { UserContext } from '../store/user.context';
import { ThemeContext } from '../store/theme.context'
import { Profile } from '../components/profile/Profile';

import { tryToCatch } from '../utils/tryToCatch';
import { updateProfileObj } from '../interfaces/user.interface';


export function UserProfile(): React.ReactElement {

  const navigate = useNavigate();
  const theme = useContext(ThemeContext)

  const userContext = useContext(UserContext);
  const tokenContext = useContext(TokenContext);
  
  const [userInfo, setUserInfo] = useState<object | null>(null);

  const submitHandler = async (payload: updateProfileObj) => {    
    const [error, res] = await tryToCatch(User.updateUserInfo, tokenContext.token, payload);
    if (error) {
      console.log(error.detail);
    }; setUserInfo(res.data.detail);
  };

  useEffect(() => {
    if (!tokenContext.token) return navigate('/login');
    (async () => {
      const [error, res] = await tryToCatch(User.getUserInfo, tokenContext.token);   
      if (error) {  
        console.log(error);
      } setUserInfo({...res.data.detail, setUserInfo});   
      userContext.setUserInfo({...res.data.detail, setUserInfo});
    })();
  }, []);
  return (
    <div className="page-container" style={{backgroundColor: theme.backgroundColor}}>
      <Profile userInfo={userInfo} textColor={theme.color} submitHandle={submitHandler} />
    </div>
    );
};
