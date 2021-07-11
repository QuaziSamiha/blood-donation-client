import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import styles from './Donor.module.css';

const Donor = ({ donor }) => {
    // console.log(donor);
    const { imageUrl, name, city, bloodGroup, email, phnNo, gender } = donor;

    return (
        <div className={styles.all_component}>
            <Navbar />
            <div className='col-lg-4 '>
                <div className={styles.donor}>
                    <div className='d-flex'>
                        <div className={styles.donor_info}>
                            <p>Name: {name}</p>
                            <p>City: {city}</p>
                            <p>Blood Group: {bloodGroup}</p>
                            <p>Email: {email}</p>
                            <p>Mobile No: {phnNo}</p>
                            <p>Gender: {gender}</p>
                        </div>
                        <div className={styles.donor_img}>
                            <img src={imageUrl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;