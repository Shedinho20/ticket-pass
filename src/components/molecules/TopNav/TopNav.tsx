import React from 'react';
import { Logo } from '../../atoms';
import { Container } from '../../layouts';
import { Nav } from '../Nav/Nav';
import styles from './topNav.module.css';

export const TopNav = () => {
  return (
    <Container extraClassNames={styles.container} align="center" gap="space-between" pagePadding>
      <Logo />
      <div className={styles.btnContainer}>
        <Nav />
      </div>
    </Container>
  );
};
