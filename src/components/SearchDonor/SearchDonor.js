import React from 'react';
import './SearchDonor.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Search from '../Search/Search';

const SearchDonor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchedDonorInfo, setSearchedDonorInfo] = useState([]);

    const onSubmit = data => {
        // console.log(data);
        fetch(`http://localhost:5055/searchDonors?city=${data.city}&bloodGroup=${data.bloodGroup}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSearchedDonorInfo(data);
            })
    }

    return (
        <div className='container all-component'>
            <div className='p-5 bg-dark border border-dark rounded-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend className='text-center'>Search for Donors</legend>
                    <div className="center-aligned m-3 d-flex row">
                        <div className='col-md-4 col-lg-4'>
                            <select name="bloodGroup"  {...register("bloodGroup")} className="form-control bg-dark text-light">
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
                            <input type="text" name="city" {...register("city")} placeholder='city name...' required className='city-name form-control bg-dark text-light' /> <br />
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <input type="submit" value="search" className='form-control bg-danger text-light border rounded-3 all-btn' />
                        </div>
                    </div>
                </form>
            </div>

            {
                // searchedDonorInfo.map((donor, index) => <Search key={index} donorInfo={donor}></Search>)
            }
        </div>
    );
};

export default SearchDonor;

// form-group 