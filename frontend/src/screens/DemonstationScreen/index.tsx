import React, { useEffect, useState } from 'react';
import Slide from '../../logic/models/Slide';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom'
import presentationsService from '../../logic/services/PresentationService';

export const DemonstrationScreen: React.FunctionComponent = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [presentationId, setPresentationId] = useState('');
  const location = useParams();

  useEffect(() => {
    if (location.id !== null) {
      setPresentationId(location.id as string);
      presentationsService.getSlidesForPresentation(location.id as string)
        .then(el => {
          console.log('load', el);
          setSlides(el);
        });
    }
  }, []);

  const next = () => setActiveSlideIndex(Math.min(activeSlideIndex + 1, slides.length));
  const previous = () => setActiveSlideIndex(Math.max(activeSlideIndex - 1, 0));

  const onKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      previous();
    }
    else if (event.key === 'ArrowRight') {
      next();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    return () => { console.log('remove'); document.removeEventListener('keydown', onKeyPress); }
  }, [slides, activeSlideIndex]);

  console.log('active', activeSlideIndex);
  return slides[activeSlideIndex] === null || slides[activeSlideIndex] === undefined ? (
      <div className={styles.noSlide}>
        <p>No slide selected</p>
      </div>
    ) : (
      <div className={styles.demonstrationBlock}>
        <div className={styles.slideField}>
          <p>{slides[activeSlideIndex].id ?? 'No'} slide</p>
        </div>
      </div>
    );
};

export default DemonstrationScreen;
