import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as FaceIcon } from '../../assets/icons/face.svg';
import pswIcon from '../../assets/icons/password.svg';
import { Link } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import EditUserData from './EditUserData';
// import EditedUser from '../../logic/models/UserModel';



export const ProfilePage: React.FunctionComponent = () => {
  const [photo, setPhoto] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const onSubmit = () => {

  };
  const onLoad = ()=>{

  }
  useEffect(() => {
    // getUserData()
  })

  return (
    <div className={styles.profileForm}>
      <div className={styles.header}>
        <p className={styles.IPS}><Link to="/login">IPS</Link></p>
        <p className={styles.My_Data}>My data</p>
        <div className={styles.logout}>
        <FaceIcon height='40px' width='40px' />
        <span className={styles.span}><Link to="/login">Log out</Link></span>
        </div>
      </div>
      <div className={styles.userData}>
        
        <FaceIcon height='300px' width='300px' />
        <div className={styles.data}>
          <div>
            <span className={styles.name}>John Smith</span>
            <EditUserData onSubmit={onSubmit}/></div>
            <span className={styles.email}>john_smith@gmail.com</span>
            
          <ChangePassword onSubmit={onSubmit}/>
        </div>
      </div>
      {/* <AddPresentation onSubmit={onSubmit} /> */}

      {/* {presentations.map(el => <div>{el.name}</div>)} */}
    </div>
  );
};

export default ProfilePage;
