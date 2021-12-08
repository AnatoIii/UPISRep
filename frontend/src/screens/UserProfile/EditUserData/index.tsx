import React, { useEffect, useState } from 'react';
import Button from '../../../components/Base/Button';
import Input from '../../../components/Base/Input';
import IPSModal from '../../../components/Base/Modal';
import NewPresentation from '../../../logic/models/Presentations/NewPresentation';
import styles from './styles.module.scss';
import { ReactComponent as PswIcon} from '../../../assets/icons/password.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/pencil.svg';
import UserModel from '../../../logic/models/UserModel';
import { Link, useNavigate } from 'react-router-dom';

interface IProps {
  onSubmit: (pr: UserModel) => void;
}

export const EditUserData: React.FunctionComponent<IProps> = ({ onSubmit }: IProps) => {
  const [IsEditUserDataFormOpened, setIsEditUserDataFormOpened] = useState(false);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // getUserData()
  })
  const submit = () => {
    if (email === '') {
      alert('Email can not be empty');
      return;
    }

    // onSubmit({ firstname: fname, lastname: lname, email: email });
    setIsEditUserDataFormOpened(false);
  }
  // authService.editUserData({ email: login, password }, navigate);
  const onLoad  = () => {

  };

  const onCancel = () => {
    setIsEditUserDataFormOpened(false);
  }

  return (
    <>
    <button className={styles.pencil} onClick={() => setIsEditUserDataFormOpened(true)}>
            <EditIcon height='40px' width='40px'/>
          </button>
     <IPSModal isModalOpened={IsEditUserDataFormOpened} onClose={() => setIsEditUserDataFormOpened(false)}>
        <div className={styles.addForm}>
          <div className={styles.title}>Edit your data</div>
          <div className={styles.input}>
            <div className={styles.label}>
              Email
            </div>
            <Input value={email} onChange={v => setEmail(v.target.value)} placeholder="Email" width='96%' />
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              First Name
            </div>
            <Input value={fname} onChange={v => setFname(v.target.value)} placeholder="First Name"  width='96%'/>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              Last Name
            </div>
            <Input value={lname} onChange={v => setLname(v.target.value)} placeholder="Last Name" width='96%' />
          </div>
          
          <div className={styles.buttons}>
            <button className={styles.cancel} onClick={onCancel}> Cancel </button>
            <button className={styles.submit} onClick={submit}> Submit </button>
          </div>
        </div>
      </IPSModal>
    </>
  );
};

export default EditUserData;
