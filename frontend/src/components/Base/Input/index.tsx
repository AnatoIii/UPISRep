import React, { ChangeEvent } from 'react';
import styles from './styles.module.scss';

export interface IProps {
  placeholder?: string;
  width?: number | string;
  height?: number | string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  className?: string;
}

export const Input: React.FunctionComponent<IProps> = ({
  placeholder,
  width,
  height,
  value,
  onChange,
  type, 
  name,
  className
}: IProps) => {
  return (
    <input type={type} name={name} value={value} onChange={onChange} style={{ width: width, height }} className={'${styles.input} ${className}'} placeholder={placeholder} />
  );
};

export default Input;
