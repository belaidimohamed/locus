import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazily } from 'react-lazily'
import './App.css';

import { ThemeContext, themes, ThemeType } from './store/theme.context';
import { UserContext, userInfoType } from './store/user.context';
import { TokenContext } from './store/token.conetxt';

import { tryToCatch } from './utils/tryToCatch';
import { User } from './api/user';

import { NavBar } from './components/navbar/NavBar';

const { Home } = lazily(() => import('./pages/Home'));
const { Login } = lazily(() => import('./pages/Login'));
const { Register } = lazily(() => import('./pages/Register'));
const { Users } = lazily(() => import('./pages/Users'));
const { Messages } = lazily(() => import('./pages/Messages'));
const { UserProfile } = lazily(() => import('./pages/UserProfile'));
const { UserFriends } = lazily(() => import('./pages/UserFriends'));
const { MessageDetail } = lazily(() => import('./pages/MessageDetail'));
const { Notifications } = lazily(() => import('./pages/Notifications'));

export function App(): React.ReactElement {

  const [theme, setTheme] = useState<ThemeType>(themes.light);
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<userInfoType | null>(null);

  const tokenContext = useContext(TokenContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    localStorage.getItem('mode') === 'light' 
                                      ? setTheme(themes.light) 
                                      : setTheme(themes.dark)
  }, [token]);
  useEffect(() => {
    token &&
    (async () => {
      const [error, res] = await tryToCatch(User.getUserInfo, token);   
      if (error) {        
        localStorage.removeItem('token');
        tokenContext.setToken(null);
        userContext.setUserInfo(null);
      } setUserInfo({...res.data.detail, setUserInfo});   
      setUserInfo({...res.data.detail, setUserInfo});
    })();
  }, [token]);

  return (
    <div className='App'>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
        <TokenContext.Provider value={{token, setToken}}>
          <ThemeContext.Provider value={{...theme, setTheme}}>
            {token && <NavBar avatar={userInfo?.avatar} 
                              username={userInfo?.firstName + ' ' + userInfo?.lastName} />
            }
            <Routes>
              <Route index element={<Suspense fallback={<>Loading...</>}><Home /></Suspense>} />
              <Route path='/login' element={<Suspense fallback={<>Loading...</>}><Login /></Suspense>} />
              <Route path='/register' element={<Suspense fallback={<>Loading...</>}><Register /></Suspense>} />
              <Route path='/users' element={<Suspense fallback={<>Loading...</>}><Users /></Suspense>} />
              <Route path='/messages' element={<Suspense fallback={<>Loading...</>}><Messages /></Suspense>} />
              <Route path='/profile/*' element={<Suspense fallback={<>Loading...</>}><UserProfile /></Suspense>} />
              <Route path='/friends' element={<Suspense fallback={<>Loading...</>}><UserFriends /></Suspense>} />
              <Route path='/Notifications' element={<Suspense fallback={<>Loading...</>}><Notifications /></Suspense>} />
              <Route path='/message-detail' element={<Suspense fallback={<>Loading...</>}><MessageDetail /></Suspense>} />
            </Routes>
          </ThemeContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

