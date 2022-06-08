import classNames from 'classnames';
import React from 'react';
import { Spacer } from '../../layouts';
import styles from './textArea.module.css';

type TextAreaProps = {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled?: boolean;
  autoComplete?: string;
  label?: string;
  error?: string;
  rows?: number;
};

export const TextArea: React.FunctionComponent<TextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  label,
  error,
  rows = 10
}) => {
  return (
    <div className={styles.container}>
      {label && <h3 className={styles.label}>{label}</h3>}
      <Spacer height={5} />
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(styles.textarea, { 'error-border': !!error })}
        autoComplete={autoComplete}
        rows={rows}
      />
      <Spacer height={5} />
      {error && <h3 className={styles.error}>{error}</h3>}
    </div>
  );
};
