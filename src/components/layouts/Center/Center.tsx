import classNames from 'classnames';
import React from 'react';
import styles from './center.module.css';

interface FullCenterProps {
  children: React.ReactNode;
  extraClassNames?: string;
}

export const FullCenter: React.FC<FullCenterProps> = ({ children, extraClassNames }) => {
  return <div className={classNames(styles.fullCenter, extraClassNames)}>{children}</div>;
};
