import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Donors.css';
import Donor from '../Donor/Donor';

const Donors = () => {

    const [donorInformation, setDonorInformation] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/donors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDonorInformation(data);
            })
    }, [])

    return (
        <div className='all-component'>
            <div>
                {
                    donorInformation.map((donorInfo, index) => <Donor key={index} donor={donorInfo}></Donor>)
                }
            </div>
        </div>
    );
};

export default Donors;