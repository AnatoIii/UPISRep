import React, { useState } from 'react';
import Button from '../../../components/Base/Button';
import Input from '../../../components/Base/Input';
import IPSModal from '../../../components/Base/Modal';
import NewPresentation from '../../../logic/models/Presentations/NewPresentation';
import styles from './styles.module.scss';
import { ReactComponent as PswIcon} from '../../../assets/icons/password.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import UserModel from '../../../logic/models/UserModel';

interface IProps {
  onSubmit: (pr: UserModel) => void;
}

export const ChangePassword: React.FunctionComponent<IProps> = ({ onSubmit }: IProps) => {
  const [IsChangePasswordFormOpened, setIsChangePasswordFormOpened] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onLoad = () => {
    
  }

  const submit = () => {
    if (password === '') {
      alert('Password can not be empty');
      return;
    }

    // onSubmit({ password: password, confirmPassword: confirmPassword });
    setIsChangePasswordFormOpened(false);
  }

  const onCancel = () => {
    setIsChangePasswordFormOpened(false);
  }

  return (
    <>
    <button className={styles.btnChangePassword} onClick={() => setIsChangePasswordFormOpened(true)}>
            <PswIcon />
            <span font-size='18px'>Change password</span>
          </button>
     <IPSModal isModalOpened={IsChangePasswordFormOpened} onClose={() => setIsChangePasswordFormOpened(false)}>
        <div className={styles.addForm}>
          <div className={styles.title}>Change Password</div>
          <div className={styles.input}>
            <div className={styles.label}>
              Current password
            </div>
            <Input value={password} onChange={v => setPassword(v.target.value)} placeholder=" Current password"  width='96%'/>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
               New password
            </div>
            <Input value={password} onChange={v => setPassword(v.target.value)} placeholder="Nnew Password"  width='96%'/>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              Confirm new password
            </div>
            <Input value={confirmPassword} onChange={v => setConfirmPassword(v.target.value)} placeholder="Confirm new password" width='96%' />
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

export default ChangePassword;
