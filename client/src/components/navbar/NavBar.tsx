import React, { useContext } from 'react';
import './styles.css';
import locus1 from '../../assets/locus1.png';
import locus2 from '../../assets/locus2.png';

import { Link, useNavigate } from 'react-router-dom';

import { FaUserFriends } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { CgDarkMode } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

import { ThemeContext, themes } from '../../store/theme.context';
import { TokenContext } from '../../store/token.conetxt';
import { UserContext } from '../../store/user.context';

interface props {
  avatar?: string;
  username?: string;
};

export function NavBar({avatar, username}: props): React.ReactElement {

  const navigate = useNavigate();

  const theme = useContext(ThemeContext);
  const tokenContext = useContext(TokenContext);
  const userContext = useContext(UserContext);

  const handleToggleTheme = () => {
    const mode = theme.type === 'light' ? themes.dark : themes.light
    theme.setTheme(mode);
    localStorage.setItem('mode', mode.type)
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    tokenContext.setToken(null);
    userContext.setUserInfo(null);
    navigate('/');
  };

  return (
    <>
      <header style={{backgroundColor: theme.navBackground}}>
        <div className='nav-container'>
          <div className='logo-brand'>
            <img className='brand' src={theme.type === 'light' ? locus1 : locus2} alt='Locus' width='45px' />
          </div>
          <div className='item-list'>
            <Link to='/users'>
              <h2 className='item' style={{color: theme.color}}><FaUserFriends /></h2>
            </Link>
            <Link to='/messages'>
              <h2 className='item' style={{color: theme.color}}><AiFillMessage /><small className='alert'></small></h2>
            </Link>
            <Link to='/notifications'>
              <h2 className='item' style={{color: theme.color}}><IoMdNotifications /><small className='alert'></small></h2>
            </Link>
          </div>
          <div className='util-list'>
            <Link to='/profile' style={{color: theme.color}}>
              {avatar && <img src={avatar} alt='avatar' width="30px" /> } <small className='username'>{ username?.slice(0, 10) + '...' }</small>
            </Link>
            <h2 className='item' onClick={handleToggleTheme} style={{color: theme.color}}><CgDarkMode /></h2>
            <h2 className='item' style={{color: theme.color}} onClick={handleLogout}><BiLogOut /></h2>
          </div>
        </div>
      </header>
    </>
  );
};
