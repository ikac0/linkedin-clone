import React from 'react'
import './header.styles.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header-left">
                <img 
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                    alt="logo-header-right" 
                />
                <div className="header-search">
                    <SearchIcon />
                    <input type="search" placeholder="Search" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="me" onClick={logoutOfApp}/>
            </div>
        </div>
    );
}

export default Header;