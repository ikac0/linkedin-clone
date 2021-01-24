import React from 'react'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./sidebar.styles.css";


function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://images.pexels.com/photos/220177/pexels-photo-220177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar-avatar">ќ</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>*прегледи профил</p>
                    <p className="sidebar-stat-number">865</p>
                </div>
                <div className="sidebar-stat">
                    <p>-прегледи објава</p>
                    <p className="sidebar-stat-number">111</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('javascript')}
                {recentItem('development')}
                {recentItem('front-end')}
                {recentItem('IT')}
            </div>
        </div>
    );
}

export default Sidebar;
