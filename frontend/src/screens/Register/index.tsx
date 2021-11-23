import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { IButtonType } from '../../components/Base/Button';
import Input from '../../components/Base/Input';
import Auth from '../../containers/Auth';
import authService from '../../logic/services/AuthService';
import styles from './styles.module.scss';
import FormValidator from "../../containers/helpers/FormValidator";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
  firstName: string;
  lastName: string;
  // username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Register: React.FunctionComponent = () => {



  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Firstname is required'),
    lastName: Yup.string().required('Lastname is required'),
    // username: Yup.string()
    //   .required('Username is required')
    //   .min(6, 'Username must be at least 6 characters')
    //   .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };
  
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setCPassword] = useState('');
  const navigate = useNavigate();
  const [fields, setFields] = useState({});

  // const validator = new FormValidator([
  //   {
  //     field: "fname",
  //     method: "isEmpty",
  //     validWhen: false,
  //     message: "Enter full name.",
  //   },
  //   // {
  //   //   field: "email",
  //   //   method: "isEmpty",
  //   //   validWhen: false,
  //   //   message: "Enter your email address.",
  //   // },
  //   // {
  //   //   field: "email",
  //   //   method: "isEmail",
  //   //   validWhen: true,
  //   //   message: "Enter valid email address.",
  //   // },
  //   // {
  //   //   field: "phone",
  //   //   method: "isEmpty",
  //   //   validWhen: false,
  //   //   message: "Enter a phone number.",
  //   // },
  //   // {
  //   //   field: "password",
  //   //   method: "isEmpty",
  //   //   validWhen: false,
  //   //   message: "Enter password.",
  //   // },
  //   // {
  //   //   field: "password_confirmation",
  //   //   method: "isEmpty",
  //   //   validWhen: false,
  //   //   message: "Enter Password confirmation.",
  //   // },
  //   // {
  //   //   field: "password_confirmation",
  //   //   // method: passwordMatch, // notice that we are passing a custom function here
  //   //   validWhen: true,
  //   //   message: "Password and password confirmation do not match.",
  //   // },
  // ]);

 

  
  const handleInputChange = (event: any) => {
    // event.preventDefault();
    console.log(event);
    setFields(
      {...fields, [event.target.name]: event.target.value}
    )
  };

  const processSignUp = (event : any) => {
    event.preventDefault();
    console.log('sign up')
    // validate(validators, value)
    // setState({
    //   validation,
    // });
    // const submitted = true;
    // if (validation.isValid) {
    //   authService.register({firstName: fname, lastName:lname, email:email, password:password}, navigate);//reaches here if form validates successfully...
    // }

  };

  console.log(errors);

  

  const getRegisterForm = () => (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>Sign up</div>
      <p className={styles.signUp}></p>
      <Input 
         {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
       placeholder='First Name' width="100%" type="string" name='firstName' onChange={e => handleInputChange(e)} />
       <div className={styles.invalidfeedback}>{errors.firstName?.message}</div>

      <Input {...register('lastName')} placeholder='Last Name' name='lname' width="100%" type="string" onChange={e => handleInputChange(e)} />
      <div className={styles.invalidfeedback}>{errors.lastName?.message}</div>
      <Input  {...register('email')} placeholder='Email' name='email' width="100%" type="email" onChange={e => setEmail(e.target.value)} />
      <div className={styles.invalidfeedback}>{errors.email && <p>{errors.email.message}</p>}</div>
      <Input {...register('password')} placeholder='Password' name='password' width="100%" type='password' onChange={e => setPassword(e.target.value)} />
      <div className={styles.invalidfeedback}>{errors.password?.message}</div>
      <Input {...register('confirmPassword')} placeholder='Confirm Password' name='confpassword' width="100%" type='password' onChange={e => setCPassword(e.target.value)} />
      <div className={styles.invalidfeedback}>{errors.confirmPassword?.message}</div>
      <Button text='SIGN UP' width="100%" type={IButtonType.Primary} />
      <p className={styles.hasAccount}>Already have an account? <Link to="/login">Sign in</Link></p>
    </form>
  );

  return (
    <Auth>
      {getRegisterForm()}
    </Auth>
  );
};

export default Register;
