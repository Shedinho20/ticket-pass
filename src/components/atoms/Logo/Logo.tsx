import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './logo.module.css';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <h1 className={styles.logo} onClick={() => navigate(`/pageNumber=1`)}>
      ticket<span>pass</span>
    </h1>
  );
};
