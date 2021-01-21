import React from 'react'
import './header.styles.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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
            </div>
        </div>
        
    )
}

export default Header;