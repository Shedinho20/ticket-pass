import classNames from 'classnames';
import { Spacer } from '../../layouts';
import styles from './dropFile.module.css';

interface IDropFileInput {
  onChange: (e: any) => void;
  image?: string;
  accept?: string;
  error?: string;
}

export const DropFileInput = ({ error, onChange, image, accept }: IDropFileInput) => {
  return (
    <>
      <div className={classNames(styles.container, { 'error-border': !!error })}>
        <div>{image ? <p>{image}</p> : <p>Choose a file</p>}</div>
        <input type="file" onChange={onChange} accept={accept} />
      </div>
      <Spacer height={5} />
      <div className={styles.errorContainer}>{error && <h3 className={styles.error}>{error}</h3>}</div>
    </>
  );
};
