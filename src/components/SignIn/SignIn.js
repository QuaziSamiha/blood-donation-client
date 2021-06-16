import React from 'react';
import './SignIn.css';
import GoogleLogo from '../../images/google-logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        name: '',
        image: '',
        error: '',
        success: false
    });
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const signedInUser = {
                    isSignedIn: true,
                    email: result.user.email,
                    name: result.user.displayName,
                    image: result.user.photoURL,
                    error: false,
                    success: true
                }
                // console.log(result.user);
                setUser(signedInUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                const failedUserSigningIn = {
                    isSignedIn: false,
                    error: true,
                    success: false
                }
                setUser(failedUserSigningIn);
                console.log(errorMessage);
            });
    }

    console.log(user);

    return (
        <div className='pt-5'>
            <div className='text-light pt-5 mt-5'>
                {
                    user.isSignedIn ?
                        <div className='text-center'>
                            <h3>Welcome {user.name}!!!</h3>
                            <p className='fs-4'>You Signed in Successfully</p>
                        </div>
                        :
                        <div className='login-div'>
                            <div className='bg-dark login-form'>
                                <button onClick={googleSignIn} className='btn btn-primary google-btn'>
                                    <img src={GoogleLogo} alt="" className='google-logo px-2' />
                                    Continue with Google
                                </button>

                                <div className='d-flex'>
                                    <div style={{ width: '45%' }}> <hr /> </div>
                                    <p className='fs-5 px-3'> or </p>
                                    <div style={{ width: '45%' }}> <hr /> </div>
                                </div>

                                <form action="" >
                                    <input className='form-control bg-dark text-light' type="text" name="" placeholder='Your Name' /> <br />
                                    <input className='form-control bg-dark text-light' type="text" name="" placeholder='Your Email Address' /> <br />
                                    <input className='form-control bg-dark text-light' type="password" name="" placeholder='Your Password' />
                                    <p className='fs-6'><small>8 characters minimum</small></p>
                                    <input className='form-control bg-success text-light' type="submit" value="Sign up" />
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default SignIn;