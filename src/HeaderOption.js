import React from 'react'
import './headerOption.css';

function HeaderOption({ Icon, title }) {
    return (
        <div className="header-option">
            {Icon && <Icon className="header-option-icon" />}
            <h3 className="header-option-title">{title}</h3>
        </div>
    )
}

export default HeaderOption
