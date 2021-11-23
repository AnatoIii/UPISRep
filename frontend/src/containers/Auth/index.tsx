import React from 'react';
import styles from './styles.module.scss';

export interface ILoginPageProps {
  children: any;
}

export const LoginPage: React.FunctionComponent<ILoginPageProps> = ({
  children
}: ILoginPageProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.mainForm}>
        <div className={styles.leftPart}>
          {children}
        </div>
        <div className={styles.rightPart}>
          <div className={styles.picture}>
            <p className={styles.IPS}>IPS</p>
            <p className={styles.text}>Interactive Presentation service</p>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default LoginPage;
