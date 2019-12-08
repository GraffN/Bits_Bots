import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import useLocalStorage from "./Hooks";
import video from '../assets/fast-background-video.mp4'
import posterimg from '../assets/background-video-image.jpg'


function Register() {

  const [newUserName, setNewUserName] = useLocalStorage('newUser', '')
  const [newPassWord, setNewPassWord] = useLocalStorage('newPassword', '');

  
  return (
    <>
    <div className='video-wrap'>
        <video src={video} poster={posterimg} autoPlay={true} loop={true} >
        </video>
      </div>
      <div className='video-overlay'></div>
    
    <div className="landingpage">
      <div className="spacer"></div>
      <form action="" className="form signIn">
        <div className="form__logo--wrapper">
          <img className="form__logo" alt="Bits&bots"/>
        </div>
        <div className="form__input--wrapper">
          <input 
            type="username" 
            value={newUserName}
            onChange={e => setNewUserName(e.target.value)}
            placeholder="Username" 
            className="form__input"
          />

          <input 
            type="password"
            value={newPassWord}
            onChange={e => setNewPassWord(e.target.value)}
            placeholder="Password" 
            className="form__input"
          />
          
        </div>
        <div className="form__button--wrapper">
          <button className="form__button"><Link to='/'>Register</Link></button>
        </div>
      </form>
      
      
    </div>
    </>
  );
}

export default Register;
