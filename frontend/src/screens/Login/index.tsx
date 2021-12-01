import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { IButtonType } from '../../components/Base/Button';
import Input from '../../components/Base/Input';
import Auth from '../../containers/Auth';
import authService from '../../logic/services/AuthService';
import styles from './styles.module.scss';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login: React.FunctionComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const processLogin = () => {
    if (login === '' || password === '') {
      return;
    }
    authService.login({ email: login, password }, navigate);
  }

  const getLoginForm = () => (
    <div className={styles.loginForm}>
      <div className={styles.header}>WELCOME TO <p className={styles.IPS}>IPS</p></div>
      <p className={styles.login}>Log in</p>
      <Input placeholder='Email' width="100%" onChange={e => setLogin(e.target.value)} />
      <Input placeholder='Password' width="100%" type='password' onChange={e => setPassword(e.target.value)} />
      <div className="container">
        <ToastContainer/>
      </div>
      <Button text='SIGN IN' width="100%" type={IButtonType.Primary} onClick={processLogin} />
      <p className={styles.noAccount}>Don't have an account? <Link to="/register">Sign up now</Link></p>
    </div>
  );

  return (
    <Auth>
      {getLoginForm()}
    </Auth>
  );
};

export default Login;
