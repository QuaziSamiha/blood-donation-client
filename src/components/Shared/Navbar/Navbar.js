import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../../images/blood-icon.png';
import { UserContext } from '../../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-dark fixed-top'>
            <div className="container">
                <h3 className='navbar-brand logo text-danger'>
                    <span className={styles.blood_drop_logo}>
                        DONATETHEBLOOD
                        <img className='navbar-brand logo' src={Logo} alt="" />
                    </span>
                </h3>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <div className='navbar-nav'>
                        <Link className='nav-link' to="/home"><span className={styles.all_links}>Home</span></Link>
                        <Link className='nav-link' to="/donors"><span className={styles.all_links}>Donors</span></Link>
                        <Link className='nav-link' to="/search"><span className={styles.all_links}>Search</span></Link>
                        <Link className='nav-link' to="/about-us"><span className={styles.all_links}>About us</span></Link>
                        <Link to='/sign-in'>
                            <span className={styles.all_btn}>
                                <button className='btn btn-danger px-4 p-2'>
                                    {loggedInUser.name || 'Sign in'}
                                </button>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;