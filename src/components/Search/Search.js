import React from 'react';
import './Search.css';

const Search = (props) => {

    const { searchedDonorInfo, setSearchedDonorInfo } = props;
   
    return (
        <div className='all-component'>
            {/* <h2>this is search</h2> */}
            {
                searchedDonorInfo.map(donor => <p>{donor.city}</p>)
            }
        </div>
    );
};

export default Search;