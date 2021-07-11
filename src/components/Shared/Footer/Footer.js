import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
// import { FaFacebook} from 'react-icons/fa'
import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='text-light mt-0'>
            <div className='text-center bg-dark p-4'>
                <h5><small>contact with us</small></h5>
                    <Link to='/' className='px-3 text-light fs-2'>
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                    </Link>
                    <Link to='/' className='px-3 text-light fs-2'>
                        <FontAwesomeIcon icon={faFacebookMessenger} />
                    </Link>
                    <Link to='/' className='px-3 text-light fs-2'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </Link>
                <h4 className='text-warning'>&copy; copyright warning</h4>
            </div>
        </div>
    );
};

export default Footer;

// npm install --save @fortawesome/free-brands-svg-icons 
// npm install --save @fortawesome/free-regular-svg-icons