import React, { useState } from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../context/auth";

function Login(props) {
  userName = (event) => {
      this.setState = ({username: event.target.value});
  }
  passWord = (event) => {
      this.setState = ({password: event.target.value});
  }

 
 
  return (
    
    <div className="landingpage">
      <div className="spacer"></div>
      <form action="" className="form signIn">
        <div className="form__logo--wrapper">
          <img className="form__logo" alt="Bits&bots"/>
        </div>
        <div className="form__input--wrapper">
          <input 
            type="username" 
            value={userName}
            onChange={this.userName}
            placeholder="Username" 
            className="form__input"
          />

          <input 
            type="password"
            value={password}
            onChange={this.passWord}
            placeholder="Password" 
            className="form__input"
          />
          
        </div>
        <div className="form__button--wrapper">
          <button className="form__button">Register</button>
          <button onClick={postLogin} className="form__button">Sign in</button>
          <Link to='/register'>dont have a account?</Link>
          {isError &&<error>The username or password provided were incorrect!</error>}
          
        </div>
      </form>
      
      
    </div>
  );
}

export default Login;
