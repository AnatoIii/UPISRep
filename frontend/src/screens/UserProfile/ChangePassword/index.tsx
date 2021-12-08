import React, { useState } from 'react';
import Button from '../../../components/Base/Button';
import Input from '../../../components/Base/Input';
import IPSModal from '../../../components/Base/Modal';
import NewPresentation from '../../../logic/models/Presentations/NewPresentation';
import styles from './styles.module.scss';
import { ReactComponent as PswIcon} from '../../../assets/icons/password.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import UserModel from '../../../logic/models/UserModel';
import changePasswordService from '../../../logic/services/ChangePasswordService';
import { useNavigate } from 'react-router';

interface IProps {
  onSubmit: (pr: UserModel) => void;
}
type ChangePasswordForm = {
  password: string;
  confirmPassword: string;
};

export const ChangePassword: React.FunctionComponent<IProps> = ({ onSubmit }: IProps) => {
  const [IsChangePasswordFormOpened, setIsChangePasswordFormOpened] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const submit = () => {
    if ((password === '')||(newPassword === '')){
      alert("Password can't be empty");
      return;
    }

    if (newPassword != confirmPassword) {
      alert("Password and confirm password doesn't match");
      return;
    }   

    // console.log(JSON.stringify(data, null, 2));
    
    // changePasswordService.changePassword({password: data.password}, navigate);
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
            <Input value={password} onChange={v => setPassword(v.target.value)} placeholder="Current password"  width='96%'/>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
               New password
            </div>
            <Input value={newPassword} onChange={v => setNewPassword(v.target.value)} placeholder="New Password"  width='96%'/>
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
