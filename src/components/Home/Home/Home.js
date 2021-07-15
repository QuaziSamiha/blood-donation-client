import React from 'react';
import styles from './Home.module.css';
import SearchDonor from '../SearchDonor/SearchDonor';
import LifeSaveBanner from '../LifeSaveBanner/LifeSaveBanner';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';

const Home = (props) => {

    return (
        <div className={styles.all_component}>
            <Header />
            <SearchDonor />
            <LifeSaveBanner />
            <Footer />
        </div>
    );
};

export default Home;