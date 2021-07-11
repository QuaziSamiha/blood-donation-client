import React from 'react';
import styles from './Search.module.css';
// import Donor from '../Donor/Donor';
import Donor from '../Donor/Donor';
import Navbar from '../Shared/Navbar/Navbar';

const Search = (props) => {

    const { searchedDonorInfo, setSearchedDonorInfo } = props;
    //    console.log(props.searchedDonorInfo);
    return (
        <div className={styles.all_component}>
            <Navbar />
            <div className='row'>
                {
                    searchedDonorInfo.map(donor => <Donor donor={donor}></Donor>)
                }
            </div>
        </div>
    );
};

export default Search;