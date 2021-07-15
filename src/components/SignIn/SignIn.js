import React, { useContext } from 'react';
import styles from './SignIn.module.css';
import GoogleLogo from '../../images/google-logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

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

    console.log(user);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

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
                setLoggedInUser(signedInUser);
                history.replace(from);
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

    // console.log(user);

    return (
        <div className={styles.all_component}>
            <Navbar />

            {
                user.isSignedIn ?
                    <div className='text-center'>
                        <h3>Welcome {user.name}!!!</h3>
                        <p className='fs-4'>You Signed in Successfully</p>
                    </div>
                    :
                    <div className={styles.login_div}>
                        <div className={styles.login_form}>
                            <div>
                                <button onClick={googleSignIn} className='btn btn-primary'>
                                    <img src={GoogleLogo} alt="" />
                                    Continue with Google
                                </button>
                            </div>

                            <div className='d-flex'>
                                <div style={{ width: '45%' }}> <hr /> </div>
                                <p className='fs-5 px-3'> or </p>
                                <div style={{ width: '45%' }}> <hr /> </div>
                            </div>

                            <form action="" >
                                <input className='form-control' type="text" name="" placeholder='Your Name' /> <br />
                                <input className='form-control' type="text" name="" placeholder='Your Email Address' /> <br />
                                <input className='form-control' type="password" name="" placeholder='Your Password' />
                                <p><small>8 characters minimum</small></p>
                                <input className='form-control bg-success text-light' type="submit" value="Sign up" />
                            </form>
                        </div>
                    </div>
             } 

            <Footer />
        </div>
    );
};

export default SignIn;