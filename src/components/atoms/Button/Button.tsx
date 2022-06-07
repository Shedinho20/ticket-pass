import classNames from 'classnames';
import React from 'react';
import { Color } from '../../../theme/color';
import styles from './button.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bgColor?: Color;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isOutline?: boolean;
  extraClassNames?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  bgColor = Color.MainGreen,
  disabled,
  type = 'button',
  isLoading,
  extraClassNames,
  isOutline
}) => {
  const isDisabled = disabled || isLoading;

  const getBgColor = (bgColor: Color) => {
    if (isOutline) {
      return Color.Transparent;
    }

    if (isDisabled) {
      return Color.Disabled;
    }

    return bgColor;
  };

  return (
    <button
      style={{ backgroundColor: getBgColor(bgColor) }}
      onClick={onClick}
      className={classNames(styles.button, extraClassNames, {
        [styles.loading]: isLoading,
        [styles.outline]: isOutline
      })}
      disabled={isDisabled}
      type={type}>
      {children}
    </button>
  );
};
