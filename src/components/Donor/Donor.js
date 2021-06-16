import React from 'react';
import './Donor.css';

const Donor = ({ donor }) => {
    // console.log(donor);
    const { imageUrl, name, city, bloodGroup, email, phnNo, gender } = donor;

    return (
        <div className='all-component'>
            <div className='all-donors d-flex row'>
                <div className='donor d-flex col-sm-8 col-md-4 col-lg-4'>
                    <div className='donor-info'>
                        <p>Name: {name}</p>
                        <p>City: <b>{city}</b></p>
                        <p><b>Blood Group: {bloodGroup}</b></p>
                        <p>Email: {email}</p>
                        <p>Mobile No: {phnNo}</p>
                        <p>Gender: {gender}</p>
                    </div>
                    <div className='donor-img'>
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;