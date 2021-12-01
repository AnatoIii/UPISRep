import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { IButtonType } from '../../components/Base/Button';
import Auth from '../../containers/Auth';
import authService from '../../logic/services/AuthService';
import styles from './styles.module.scss';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
    email: string;
    password: string;
  };

export const Login: React.FunctionComponent = () => {
  const validationSchema = Yup.object().shape({
     email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
  });
   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    authService.login({email: data.email, password:data.password}, navigate);
    //to next page
  };
 
  const getLoginForm = () => (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}> 
      <div className={styles.header}>WELCOME TO <p className={styles.IPS}>IPS</p></div>
      <p className={styles.login}>Log in</p>
      <input  {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
       placeholder='Email' width="100%" type="string" name="email" />
      <div className={styles.invalidfeedback}>{errors.email?.message}</div>
      <input 
         {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
       placeholder='Password' width="100%" type="password" name="password" />
      <div className={styles.invalidfeedback}>{errors.password?.message}</div>

      <div className="container">
        <ToastContainer/>
      </div>
      <Button text='SIGN IN' width="100%" type={IButtonType.Primary} />
      <p className={styles.noAccount}>Don't have an account? <Link to="/register">Sign up now</Link></p>
    </form>
  );

  return (
    <Auth>
      {getLoginForm()}
    </Auth>
  );
};

export default Login;
