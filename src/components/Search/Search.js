import React from 'react';
import './Search.css';
import Donor from '../Donor/Donor';

const Search = (props) => {

    const { searchedDonorInfo, setSearchedDonorInfo } = props;
//    console.log(props.searchedDonorInfo);
    return (
        <div className='all-component row'>
            {
                searchedDonorInfo.map(donor => <Donor donor={donor}></Donor>)
            }
        </div>
    );
};

export default Search;