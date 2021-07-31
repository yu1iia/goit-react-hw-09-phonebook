import React from 'react';

// import Section from '../Section';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Loader.module.css';

const Loading = () => (
  <div className={styles.loaderContainer}>
    <Loader
      type="ThreeDots"
      color="#9e9d9d"
      height={50}
      width={50}
      className="loader"
      backgroundColor="transparent"
      margin="20 auto"
      text-align="center"
      transition="background-color 2s ease-out"
    />
  </div>
);

export default Loading;
