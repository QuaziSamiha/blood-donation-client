import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='text-light'>
            <div className='text-center bg-dark p-4'>
                <h5><small>contact us</small></h5>
                {/* <Link to='/' className='footer-link'> */}
                <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
                {/* </Link> */}
                <h4 className='text-warning'>&copy; copyright warning</h4>
            </div>
        </div>
    );
};

export default Footer;