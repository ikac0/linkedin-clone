import React from 'react'
import './header.styles.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img 
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                    alt="logo-header-right" 
                />
                <div className="header-search">
                    <SearchIcon />
                    <input type="search" placeholder="work bitch" label="kurac"></input>
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://scontent-ber1-1.cdninstagram.com/v/t51.2885-19/11201511_1568388486782675_392441241_a.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com&_nc_ohc=9ixJjnJcMZAAX-tmpuQ&oh=a6a27ae79f005fa050dfcd6b9c7c6ceb&oe=6032FB1E" title="me"/>
            </div>
        </div>
    );
}

export default Header;