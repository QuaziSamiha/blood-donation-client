import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/blood-icon.png';

const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light bg-dark'>
                <div className="container">
                    <h3 className='navbar-brand logo text-danger'>DONATETHEBLOOD
                        <img className='navbar-brand logo blood-drop-logo' src={Logo} alt="" />
                    </h3>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <div className='navbar-nav'>
                            <Link className='nav-link px-3 text-light all-links' to="/home"><small>Home</small></Link>
                            <Link className='nav-link px-3 text-light all-links' to="/donors"><small>Donors</small></Link>
                            <Link className='nav-link px-3 text-light all-links' to="/search"><small>Search</small></Link>
                            <Link className='nav-link px-3 text-light all-links' to="/about-us"><small>About us</small></Link>
                            <Link to='/sign-in'><button className='btn btn-danger px-4 p-2 m-2 all-btn'>Sign in</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

//  className='nav-item'
//  className='fixed-top'


