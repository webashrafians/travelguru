import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App.js';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager.js';
import fbLogo from '../../images/Icon/fb.png';
import googleLogo from '../../images/Icon/google.png';
import './Login.css';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 7;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    // if(e.target.name === 'cpassword'){
    //     const isPasswordValid = e.target.value.length > 7;
    //     const passwordHasNumber =  /\d{1}/.test(e.target.value);
    //     isFieldValid = isPasswordValid && passwordHasNumber;
    // }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div align="center">
      
     <div align="center" className="form-style">
        <h3> {newUser ? 'Create an account' : 'Log In'}  </h3>
        <form className="ship-form" onSubmit={handleSubmit}>
            {newUser && 
                <input name="fname" type="text" onBlur={handleBlur} placeholder="Your First name" required/>
            }
            {newUser && 
                <input name="lname" type="text" onBlur={handleBlur} placeholder="Your Last name" required/>
            }
            <br/>

            <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
            <br/>

            
            
            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
{/* 
            {newUser && 
                <input name="cpassword" type="text" onBlur={handleBlur} placeholder="Confirm Password"/>
            } */}

            { 
              (!newUser) && 
              <input type="checkbox" name="" id=""/>
            }

            {/* <input style={{backgroundColor: 'goldenrod'}} type="submit" value={newUser ? 'Create an account' : 'Login'}/> */}
        </form>
        <button style={{backgroundColor: 'goldenrod', width: '200px', borderRadius: '20px', fontSize: '20px'}}>
          <Link to='/roomDetails'>{newUser ? 'Create an account' : 'Login'}</Link>
        </button>
        <p>           
            { 
                newUser 
                ? 'Already have an account?Login' 
                : 'Do not Have an account? Create a new account'               
            }
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
        </p>
     </div>

      <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}

      { user.isSignedIn      
          ? <button onClick={signOut}>Sign Out</button> 
          :<button style={{backgroundColor: 'white', borderRadius: '20px', width: '300px', lineHeight: '30px'}} onClick={googleSignIn}> <img src={googleLogo} alt="" width='35px' align='left'/> Continue With Google</button>
      }
      <br/> <br/>
      
      <button style={{backgroundColor: 'white', borderRadius: '20px', width: '300px', lineHeight: '30px'}} onClick={fbSignIn}> <img src={fbLogo} alt="" width='35px' align='left'/> Continue With Facebook</button>

    </div>
  );
}

export default Login;