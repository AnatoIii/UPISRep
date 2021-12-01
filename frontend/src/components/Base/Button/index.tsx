import React from 'react';
import styles from './styles.module.scss';

export enum IButtonType {
  Primary,
  Secondary
}

export interface IProps {
  text: string;
  type?: IButtonType;
  width?: number | string;
  height?: number | string;
  loading?: boolean;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<IProps> = ({
  text,
  type,
  width,
  height,
  onClick
}: IProps) => {
  const typeClass = type === IButtonType.Primary ? styles.primary : styles.secondary;

  return (
    <button style={{ width: width, height }} className={`${styles.button} ${typeClass}`} onClick={onClick} >
      {text}
    </button>
  );
};

export default Button;
