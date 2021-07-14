import React from 'react';
import styles from './LifeSaveBanner.module.css';
import { Link } from 'react-router-dom';

const LifeSaveBanner = () => {
    return (
        <div className={styles.all_component}>
            <div className='bg-danger'>
                <h1 className="text-center pt-3">Donate The Blood</h1>
                <p className='px-5 mx-5 text-light'>
                    <small>
                        At the point when an individual gives blood for someone else who needs blood, emerging because of an ailment,
                        it is called blood gift. A blood donation is completed on account of a prepared clinical expert and in a
                        protected situation, according to the clinical norms. Giving blood is a compassionate motion, and more
                        individuals
                        are getting attracted to it by each spending year. It is a decent sign as it shows that individuals are getting
                        progressively reasonable towards others’ sufferings.
                    </small>
                </p>
                <div className='text-center'>
                    <Link to='/registration'>
                        <button className={styles.life_saver}>Be a Life Saver</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LifeSaveBanner;