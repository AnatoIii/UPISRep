import React, { ChangeEvent } from 'react';
import styles from './styles.module.scss';

export interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: number | string;
  height?: number | string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FunctionComponent<IProps> = ({
  placeholder,
  width,
  height,
  value,
  onChange,
  className,
  ...rest
}: IProps) => {
  console.log(rest)
  return (
    <input value={value} onChange={onChange} style={{ width: width, height }} className={`${styles.input} ${className}`} placeholder={placeholder} {...rest}/>
  );
};

export default Input;
