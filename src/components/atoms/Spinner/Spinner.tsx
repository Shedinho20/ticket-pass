import React from 'react';
import { SpinnerIcon } from '../../../assets/Icons';
import styles from './spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.pulse}>
      <SpinnerIcon className={styles.loader} />
    </div>
  );
};
