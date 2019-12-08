import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import useLocalStorage from "./Hooks";
import video from '../assets/fast-background-video.mp4'
import posterimg from '../assets/background-video-image.jpg'


function Login(){

  let registeredUser = localStorage.getItem("newUser");
  let registeredPassword = localStorage.getItem("newPassword");
  let typedUsername = localStorage.getItem('typedUser'); 
  let typedPassword = localStorage.getItem('typedPassword');

  const [typedUserName, setTypedUserName] = useLocalStorage('typedUser', '')
  const [typedPassWord, setTypedPassWord] = useLocalStorage('typedPassword', '');
  
  let enableBtn = {
  }

  function checkUser(){
    if(registeredUser === typedUsername && registeredPassword === typedPassword){
      enableBtn = {
      }
    } else {
      console.log("not right ")
      enableBtn = {
        opacity:'0.5',
        cursor:'not-allowed'
      }
    }
  };


  return (
    <>
    
    <div className="landingpage">
      <div className='video-wrap'>
        <video src={video} poster={posterimg} autoPlay={true} loop={true} >
        </video>
      </div>
      <div className='video-overlay'></div>
      
      <form onSubmit={checkUser()} action="" className="form signIn">
        <div className="form__logo--wrapper">
          <div className="logo logo__login" alt="Bits&bots"/>
        </div>
        <div className="form__input--wrapper">
          <input 
            type="username" 
            value={typedUserName}
            onChange={e => setTypedUserName(e.target.value)}
            placeholder="Username" 
            className="form__input"
          />

          <input 
            type="password"
            value={typedPassWord}
            onChange={e => setTypedPassWord(e.target.value)}
            placeholder="Password" 
            className="form__input"
          />
          
        </div>
        <div className="form__button--wrapper">
          <button className="form__button" style={enableBtn}><Link to='/store'>Sign in</Link></button>
          <button className="form__button"><Link to='/register'>register</Link></button>
        </div>
      </form>
      
      
    </div>
    </>
  );
}

export default Login;
