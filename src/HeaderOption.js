import React from 'react'
import './headerOption.styles.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="header-option">
            {Icon && <Icon className="header-option-icon" />}
            {avatar && (<Avatar className="header-option-icon" >{user.email[0]}</Avatar> )}
            <h3 className="header-option-title">{title}</h3>
            
        </div>   
    )
}

export default HeaderOption;