import classNames from 'classnames';
import React from 'react';
import { ContainerProps, getStyles } from './container.helpers';
import styles from './container.module.css';

export const Container: React.FunctionComponent<ContainerProps> = props => {
  const { children, extraClassNames } = props;

  return (
    <div className={classNames(styles.container, extraClassNames)} style={getStyles(props)}>
      {children}
    </div>
  );
};
