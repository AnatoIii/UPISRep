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
  props?: any;
}

export const Input: React.FunctionComponent<IProps> = ({
  placeholder,
  width,
  height,
  value,
  onChange,
  type, 
  name,
  className,
  props
}: IProps) => {
  return (
    <input type={type} value={value} onChange={onChange} style={{ width: width, height }} className={'${styles.input} ${className}'} placeholder={placeholder} {...props}/>
  );
};

export default Input;
