import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({

        }))
      } else {
        //user is loged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? ( <Login />) : (
      <div className="app-body">
        <Sidebar />
        <Feed />
           </div>
       )}
      </div>
  );
}

export default App;
