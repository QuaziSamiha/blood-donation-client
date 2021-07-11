import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import styles from './Donors.module.css';

const Donors = () => {


    return (
        <div className={styles.all_component }>
            <div className='text-center'>
                <Navbar />
                <h3>Upcoming Features.....please wait</h3>
                <p>A Donor can update, delete his account from here</p>
            </div>
        </div>
    );
};

export default Donors;