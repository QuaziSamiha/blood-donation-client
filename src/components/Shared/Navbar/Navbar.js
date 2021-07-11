import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../../images/blood-icon.png';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light bg-dark fixed-top'>
                <div className="container">
                    <h3 className='navbar-brand logo text-danger'>DONATETHEBLOOD
                        <span className={styles.blood_drop_logo}>
                            <img className='navbar-brand logo' src={Logo} alt="" />
                        </span>
                    </h3>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <div className='navbar-nav'>
                            <Link className='nav-link px-3 text-light' to="/home"><small className={styles.all_links}>Home</small></Link>
                            <Link className='nav-link px-3 text-light' to="/donors"><small className={styles.all_links}>Donors</small></Link>
                            <Link className='nav-link px-3 text-light' to="/search"><small className={styles.all_links}>Search</small></Link>
                            <Link className='nav-link px-3 text-light' to="/about-us"><small className={styles.all_links}>About us</small></Link>
                            <Link to='/sign-in'>
                                <span className={styles.all_btn}>
                                    <button className='btn btn-danger px-4 p-2 m-2'>
                                        Sign in
                                    </button>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;