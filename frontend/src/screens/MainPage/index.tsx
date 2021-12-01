import React, { useState } from 'react';
import NewPresentation from '../../logic/models/Presentations/NewPresentation';
import Presentation from '../../logic/models/Presentations/Presentation';
import presentationsService from '../../logic/services/PresentationService';
import AddPresentation from './AddPresentation';
import styles from './styles.module.scss';

export const MainPage: React.FunctionComponent = () => {
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  const onSubmit = (presentation: NewPresentation) => {
    presentationsService.createPresentation(presentation).then((el: Presentation) => {
      setPresentations([el, ...presentations]);
    })
  };

  return (
    <>
      <h1 className={styles.header}>Here should be main page</h1>
      <AddPresentation onSubmit={onSubmit} />

      {presentations.map(el => <div>{el.name}</div>)}
    </>
  );
};

export default MainPage;
