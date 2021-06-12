import React from 'react';
import './SearchDonor.css';

const SearchDonor = () => {

    const handleDonorSearch = (event) => {
    }

    return (
        <div className='container all-component'>
            <div className='p-5 bg-dark border border-dark rounded-3'>
                <form onSubmit={handleDonorSearch} action="">
                    <legend className='text-center'>Search for Donors</legend>
                    <div className="center-aligned m-3 d-flex row">
                        <div className='col-md-4 col-lg-4'>
                            <select name="blood_group" className="form-control bg-dark text-light">
                                <option defaultValue>select blood group</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB+</option>
                                <option value="AB+">AB-</option>
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                            </select> <br />
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <input className='form-control bg-dark text-light' type="text" name="city" placeholder='city name...' required/> <br />
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <input className='form-control bg-danger text-light border rounded-3 all-btn' type="submit" value="search" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchDonor;

// form-group 