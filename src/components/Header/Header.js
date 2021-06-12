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


        //     {/* <nav className='navbar navbar-expand-md navbar-light'>
        //         <div className='container'>
        //             {/* <div className='logo'> */}
        //             <a className='navbar-brand'><b>DONATETHEBLOOD</b></a>
        //             <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
        //                 <span className='navbar-toggler-icon'></span>
        //             </button>
        //         </div>
        //         <div className='collapse navbar-collapse ml-auto' id='navbarNav'>
        //             <div className='navbar-nav'>
        //                 <a className='nav-link' href="home">Home</a>
        //                 <a className='nav-link' href="donors">Donors</a>
        //                 <a className='nav-link' href="sign-in">Sign in</a>
        //                 <a className='nav-link' href="search">Search</a>
        //                 <a className='nav-link' href="about-us">About us</a>
        //             </div>
        //         </div>
        //     </div>
        // </nav> */}