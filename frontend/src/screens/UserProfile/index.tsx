import React, { useState } from 'react';
import Button from '../../components/Base/Button';
import Input from '../../components/Base/Input';
import IPSModal from '../../components/Base/Modal';
import NewPresentation from '../../logic/models/Presentations/NewPresentation';
import Presentation from '../../logic/models/Presentations/Presentation';
import presentationsService from '../../logic/services/PresentationService';
import styles from './styles.module.scss';
import { ReactComponent as FaceIcon } from '../../assets/icons/face.svg';
import EditUserData from './EditUserData';
import defaultImg from '../../assets/icons/face.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/pencil.svg';
import pswIcon from '../../assets/icons/password.svg';
import { Link, useNavigate } from 'react-router-dom';


export const ProfilePage: React.FunctionComponent = () => {
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  const onSubmit = (presentation: NewPresentation) => {
    presentationsService.createPresentation(presentation).then((el: Presentation) => {
      setPresentations([el, ...presentations]);
    })
  };
  const [photo, setPhoto] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');

  return (
    <form className={styles.profileForm}>
      {/* <h1>Here should be profile page</h1> */}
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
            <EditIcon height='40px' width='40px'/></div>
            <span className={styles.email}>john_smith@gmail.com</span>
            {/* <EditUserData/> */}
          
          <button className={styles.btnChangePassword}>
            <img src={pswIcon}  />
            <span font-size='18px'>Change password</span>
          </button>

        </div>

      </div>
      {/* <AddPresentation onSubmit={onSubmit} /> */}

      {/* {presentations.map(el => <div>{el.name}</div>)} */}
    </form>
  );
};

export default ProfilePage;
