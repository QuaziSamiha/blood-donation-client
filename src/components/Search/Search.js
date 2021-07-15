import React, { useContext } from 'react';
import styles from './Search.module.css';
// import Donor from '../Donor/Donor';
import Donor from '../Donor/Donor';
import Navbar from '../Shared/Navbar/Navbar';
import { DonorContext } from '../../App';

const Search = (props) => {

    const [searchDonorInfo, setSearchDonorInfo] = useContext(DonorContext);
    
    return (
        <div className={styles.all_component}>
            <Navbar />
            <div className='row'>
                {
                    searchDonorInfo.map((donor, index) => <Donor key={index} donor={donor} />)
                }
            </div>
        </div>
    );
};

export default Search;