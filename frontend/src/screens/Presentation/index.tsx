import React, { useEffect, useState } from 'react';
import Slide from '../../logic/models/Slide';
import styles from './styles.module.scss';
import { ReactComponent as FigureIcon } from '../../assets/icons/figure.svg';
import { ReactComponent as ImageIcon } from '../../assets/icons/image.svg';
import { ReactComponent as TextIcon } from '../../assets/icons/text.svg';
import { ReactComponent as CursorIcon } from '../../assets/icons/pointer.svg';

export const PresenationPage: React.FunctionComponent = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeMenuItem, setActiveMenuItem] = useState('cursor');

  useEffect(() => {
    setSlides([{ id: '1' }, { id: '2' }, { id: '3' }]);
  }, []);

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

  return (
    <>
      <div className={styles.header}>Let's assume it's header</div>
      <div className={styles.page}>
        <div className={styles.slidesList}>
          <div className={styles.name}>Slides</div>
          <div className={styles.slides}>
            {slides.map(sl => (
              <div key={sl.id} className={styles.slide}>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.menu}>
            {menu.map(el => (
              <div className={`${styles.menuItem} ${activeMenuItem === el.name ? styles.active : ''}`} onClick={() => toggleClick(el.onClick, el.name)} key={el.name}>
                {el.icon}
              </div>
            ))}
          </div>
          <div className={styles.mainField}>
            <div className={styles.slideField}>
              <p>Slide data</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresenationPage;
