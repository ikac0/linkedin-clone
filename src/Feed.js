import React, { useState } from 'react'
import InputOption from './InputOption';

import Post from './Post';

import './feed.styles.css';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
    const [posts, setPosts] = useState([])
    const sendPost = (e) => {
        e.preventDefault();

        setPosts([])
    }

    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" /> 
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7fc15e" />
                </div>
            </div>
            {posts.map(post => <Post /> )}
            <Post name="крстески" description="пробно" message="иди нахуй блят" />
        </div>
    );
}

export default Feed;