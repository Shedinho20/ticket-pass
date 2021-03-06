import classNames from 'classnames';
import React, { HTMLInputTypeAttribute } from 'react';
import { Spacer } from '../../layouts';
import styles from './input.module.css';

interface BaseInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  label?: string;
  error?: string;
}

export const Input: React.FunctionComponent<BaseInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  label,
  error
}) => {
  return (
    <div className={styles.container}>
      {label && <h3 className={styles.label}>{label}</h3>}
      <Spacer height={5} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(styles.input, { 'error-border': !!error })}
        autoComplete={autoComplete}
      />
      <Spacer height={5} />
      {error && <h3 className={styles.error}>{error}</h3>}
    </div>
  );
};
