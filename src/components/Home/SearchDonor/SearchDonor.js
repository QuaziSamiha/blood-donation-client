import React from 'react';
import styles from './SearchDonor.module.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchDonor = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [searchedDonorInfo, setSearchedDonorInfo] = useState([]);
    const { searchedDonorInfo, setSearchedDonorInfo } = props;

    const [isSearched, setIsSearched] = useState(false);

    const onSubmit = data => {
        // console.log(data);
        fetch(`https://whispering-woodland-72477.herokuapp.com/searchDonors?city=${data.city}&bloodGroup=${data.bloodGroup}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsSearched(true);
                setSearchedDonorInfo(data);
            })
    }

    console.log(searchedDonorInfo);

    return (
        <div className={styles.all_component}>
            <div className='px-5'>
                <div className='p-5 bg-dark border border-dark rounded-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <legend className='text-center'>Search for Donors</legend>
                        <div className="center-aligned m-3 d-flex row">
                            <div className='col-md-4 col-lg-4'>
                                <select name="bloodGroup" {...register("bloodGroup")} required className="form-control bg-dark text-light">
                                    <option defaultValue>select blood group</option>
                                    <option value="A-">A-</option>
                                    <option value="A%2B">A+</option>
                                    <option value="B-">B-</option>
                                    <option value="B%2B">B+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="AB%2B">AB+</option>
                                    <option value="O-">O-</option>
                                    <option value="O%2B">O+</option>
                                </select> <br />
                            </div>
                            <div className='col-md-4 col-lg-4'>
                                <input type="text" name="city" {...register("city")} placeholder='city name...' required className='city-name form-control bg-dark text-light' /> <br />
                            </div>
                            {/* <span className={styles.all_btn}> */}
                                <div className='col-md-4 col-lg-4'>
                                    <input type="submit" value="search" className='form-control bg-danger text-light border rounded-3' />
                                </div>
                            {/* </span> */}
                        </div>
                    </form>
                </div>

                {
                    isSearched === true ?
                        <div className='p-4 mt-5 bg-dark border border-dark rounded-3 text-center'>
                            <h4>According to Your Search {searchedDonorInfo.length} Donors Available</h4>
                            <Link to='/search'>
                                <button className='btn btn-success'>Donor Details</button>
                            </Link>
                        </div>
                        :
                        <span></span>
                }
            </div>
        </div>
    );
};

export default SearchDonor;
