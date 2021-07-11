import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import styles from './About.module.css';

const AboutUs = () => {
    return (
        <div className={styles.all_component }>
            <Navbar />
            <div className='text-center'>
                <h3>Upcoming Features.....please wait</h3>
                <p>A user can get necessary information about this website and blood donation </p>
            </div>
        </div>
    );
};

export default AboutUs;