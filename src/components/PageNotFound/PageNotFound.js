import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className={styles.all_component}>
            <div className='text-danger text-center' >
                <Navbar />
                <h2>Error 404!!</h2>
                <h4>Page is not Found</h4>
            </div>
        </div>
    );
};

export default PageNotFound;