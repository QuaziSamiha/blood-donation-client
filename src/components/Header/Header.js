import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light'>
                <div className='container'>
                    {/* <div className='logo'> */}
                        <a className='navbar-brand'><b>DONATETHEBLOOD</b></a>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    {/* </div> */}
                    <div className='collapse navbar-collapse ml-auto' id='navbarNav'>
                        <div className='navbar-nav'>
                            <a className='nav-link' href="home">Home</a>
                            <a className='nav-link' href="donors">Donors</a>
                            <a className='nav-link' href="sign-in">Sign in</a>
                            <a className='nav-link' href="search">Search</a>
                            <a className='nav-link' href="about-us">About us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        // <div></div>
        // <div>
        //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //         <div class="container-fluid">
        //             <a class="navbar-brand" href="#">Navbar</a>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarNav">
        //                 <ul class="navbar-nav">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Features</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link" href="#">Pricing</a>
        //                     </li>
        //                     <li class="nav-item">
        //                         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>

    );
};

export default Header;

//  className='nav-item'
//  className='fixed-top'

