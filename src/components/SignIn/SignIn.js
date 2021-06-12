import React from 'react';
import './SignIn.css';
import GoogleLogo from '../../images/google-logo.png';

const SignIn = () => {

    const googleSignIn = () => {

    }
    return (
        <div className='all-components pt-5'>
            <div className='text-light sign-in-form'>
                <div className='row'>
                    <div className='bg-dark mx-5 p-4 col-xs-6 col-sm-10 col-md-10 col-lg-10 login-form'>
                        <button onClick={googleSignIn} className='btn btn-primary google-btn'>
                            <img src={GoogleLogo} alt="" className='google-logo' />
                            Continue with Google
                        </button>

                        <div className='d-flex'>
                            <div style={{width:'45%'}}> <hr /> </div>
                            <p className='fs-5 px-2'> or </p>
                            <div style={{width:'45%'}}> <hr /> </div>
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
            </div>
        </div>
    );
};

export default SignIn;

//  bg-dark p-5 login-form