import React, { ChangeEvent } from 'react';
import styles from './styles.module.scss';

export interface IProps {
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input: React.FunctionComponent<IProps> = ({
  placeholder,
  width,
  height,
  value,
  onChange,
  type
}: IProps) => {
  return (
    <input type={type} value={value} onChange={onChange} style={{ width: width, height }} className={styles.input} placeholder={placeholder} />
  );
};

export default Input;
