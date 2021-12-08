import React, { useEffect, useState } from 'react';
import Slide from '../../logic/models/Slide';
import styles from './styles.module.scss';
import { ReactComponent as FigureIcon } from '../../assets/icons/figure.svg';
import { ReactComponent as ImageIcon } from '../../assets/icons/image.svg';
import { ReactComponent as TextIcon } from '../../assets/icons/text.svg';
import { ReactComponent as CursorIcon } from '../../assets/icons/pointer.svg';
import { ReactComponent as FaceIcon } from '../../assets/icons/face.svg';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import presentationsService from '../../logic/services/PresentationService';
import ContextMenu from '../../components/Base/ContextMenu';
import DemonstrationScreen from '../DemonstationScreen';

export const PresenationPage: React.FunctionComponent = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeSlide, setActiveSlides] = useState<Slide>();
  const [activeMenuItem, setActiveMenuItem] = useState('cursor');
  const [presentationId, setPresentationId] = useState('');
  const [isDemonstration, setIsDemonstation] = useState(false);
  const location = useParams();

  useEffect(() => {
    if (location.id !== null) {
      setPresentationId(location.id as string);
      presentationsService.getSlidesForPresentation(location.id as string)
        .then(el => {
          setSlides(el);
          setActiveSlides(el[0]);
        });
    }
  }, [location.id]);

  const toggleClick = (onClick: () => void, name: string) => {
    setActiveMenuItem(name);
    onClick();
  }

  const menu = [{
    name: 'cursor',
    icon: <CursorIcon width={25} height={25} fill={'#f0f0f0'} />,
    onClick: () => {}
  }, {
    name: 'image',
    icon: <ImageIcon width={25} height={25} fill={'#f0f0f0'} />,
    onClick: () => {}
  }, {
    name: 'text',
    icon: <TextIcon width={25} height={25} fill={'#f0f0f0'} />,
    onClick: () => {}
  }, {
    name: 'figure',
    icon: <FigureIcon width={25} height={25} fill={'#f0f0f0'} />,
    onClick: () => {}
  }];

  const addSlide = (slideId: string) => {
    presentationsService.addSlideForPresentation(presentationId)
      .then(slide => {
        setSlides([...slides, slide]);
        setActiveSlides(slide);
      });
  }

  const removeSlide = (slideId: string) => {
    presentationsService.removeSlideFromPresentation(presentationId, slideId)
      .then(() => {
        setSlides(slides.filter(el => el.id !== slideId));
        if (activeSlide?.id === slideId) {
          setActiveSlides(slides.filter(el => el.id !== slideId)[0] ?? {});
        }
      });
  }

  const onSlideClick = (slideId: string) => () => {
    setActiveSlides(slides.find(el => el.id === slideId));
  }

  const toggleStopDemonstration = (e: Event) => {
    const fullScreen = document.fullscreenElement;

    if (fullScreen === null) {
      setIsDemonstation(false);
      document.removeEventListener('fullscreenchange', toggleStopDemonstration as any);
    }
  }

  const startDemonstration = () => {
    document.querySelector("#demonstationScreen")?.requestFullscreen()
      .then(_ => {
        setIsDemonstation(true);
        document.addEventListener('fullscreenchange', toggleStopDemonstration as any);
      });
  }

  return (
    <>
      <div id='demonstationScreen'>
        {isDemonstration ? <DemonstrationScreen /> : null}
      </div>

      <div className={styles.header}>
        <p className={styles.IPS}><Link to="/main">IPS</Link></p>
        <p className={styles.My_Data}>Presentation name</p>
        <div className={styles.logout}>
        <FaceIcon height='40px' width='40px' />
        <span className={styles.span}><Link to="/login">Log out</Link></span>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.slidesList} id='slidesList'>
          <ContextMenu elementId='slidesList'>
            <div className={styles.newSlide} onClick={() => addSlide('')}>
              Add slide to the end
            </div>
          </ContextMenu>  
          <div className={styles.name}>Slides</div>
          <div className={styles.slides}>
            {slides.map(sl => (
              <div key={sl.id} className={`${styles.slide} ${sl.id === activeSlide?.id ? styles.activeSlide : ''}`} id={`slide-${sl.id}`} onClick={onSlideClick(sl.id)}>
                <ContextMenu elementId={`slide-${sl.id}`}>
                  <div className={styles.newSlide} onClick={() => addSlide(sl.id)}>
                    Add slide
                  </div>
                  <div className={styles.newSlide} onClick={() => removeSlide(sl.id)}>
                    Remove slide
                  </div>
                </ContextMenu>  
                <p>{sl.id}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.menu}>
            <div className={styles.menuBlock}>
              {menu.map(el => (
                <div className={`${styles.menuItem} ${activeMenuItem === el.name ? styles.active : ''}`} onClick={() => toggleClick(el.onClick, el.name)} key={el.name}>
                  {el.icon}
                </div>
              ))}
            </div>
            <div className={styles.demonstrationButton}>
              <button onClick={startDemonstration}>Start demonstration</button>
            </div>
          </div>
          <div className={styles.mainField}>
            <div className={styles.slideField}>
              <p>{activeSlide?.id ?? 'No'} slide</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresenationPage;
