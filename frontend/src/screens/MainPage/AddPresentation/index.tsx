import React, { useState } from 'react';
import Button from '../../../components/Base/Button';
import Input from '../../../components/Base/Input';
import IPSModal from '../../../components/Base/Modal';
import NewPresentation from '../../../logic/models/Presentations/NewPresentation';
import styles from './styles.module.scss';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

interface IProps {
  onSubmit: (pr: NewPresentation) => void;
}

export const AddPresentation: React.FunctionComponent<IProps> = ({ onSubmit }: IProps) => {
  const [isAddPresentationFormOpened, setIsAddPresentationFormOpened] = useState(false);

  const [presentationName, setPresentationName] = useState('');
  const [presentationLink, setPresentationLink] = useState('');

  const submit = () => {
    if (presentationName === '') {
      alert('Name is nessesary field for new presentation');
      return;
    }

    onSubmit({ name: presentationName, imageLink: presentationLink });
    setIsAddPresentationFormOpened(false);
  }

  const onCancel = () => {
    setIsAddPresentationFormOpened(false);
  }

  return (
    <>
      <button className={styles.addNewPresentation} onClick={() => setIsAddPresentationFormOpened(true)}>
        <PlusIcon height='15px' width='15px' /><span>Add new presentation</span>
      </button>

      <IPSModal isModalOpened={isAddPresentationFormOpened} onClose={() => setIsAddPresentationFormOpened(false)}>
        <div className={styles.addForm}>
          <div className={styles.title}>Add new presentation</div>
          <div className={styles.input}>
            <div className={styles.label}>
              Presentation name
            </div>
            <Input value={presentationName} onChange={v => setPresentationName(v.target.value)} placeholder="Name" width='96%'/>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              Presentation link
            </div>
            <Input value={presentationLink} onChange={v => setPresentationLink(v.target.value)} placeholder="Link" width='96%' />
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

export default AddPresentation;
