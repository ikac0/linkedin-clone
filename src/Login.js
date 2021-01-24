import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./login.styles.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL,
      }))
    }).catch(error => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
      if (!name) {
        return alert('Please Enter Your Name')
      }

      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          }))
        })
      }).catch((error) => alert(error))
  };

  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/291px-LinkedIn_Logo.svg.png" alt="logoGoesHere"/>

      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile picture URL (optional)" type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit" onClick={loginToApp} >Sign In</button>
      </form>
      <p>Not a member? <span className="register-link" onClick={register}>Register Now!</span></p>

    </div>
  )
}

export default Login;