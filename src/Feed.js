import React, { useState, useEffect } from 'react'

import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase'; //for eventually a timestamp instead of createdAt for timezones

import './feed.styles.css';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Крстески Илија',
            description: "сука блат",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input value={input} type="text" onChange={e => setInput(e.target.value)} />
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
            {posts.map( ({ id, data: { name, description, message, photoUrl } }) => (
            <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
             )
            )}
            <Post name="крстески" description="пробно" message="иди нахуй блят" />
        </div>
    );
}

export default Feed;