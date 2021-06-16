import React from 'react';
import './Donor.css';

const Donor = ({ donor }) => {
    // console.log(donor);
    const { imageUrl, name, city, bloodGroup, email, phnNo, gender } = donor;

    return (
        <div className='col-lg-4 all-component'>
            <div className='donor d-flex'>
                <div className='donor-info'>
                    <p>Name: {name}</p>
                    <p>City: {city}</p>
                    <p>Blood Group: {bloodGroup}</p>
                    <p>Email: {email}</p>
                    <p>Mobile No: {phnNo}</p>
                    <p>Gender: {gender}</p>
                </div>
                <div className='donor-img'>
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Donor;