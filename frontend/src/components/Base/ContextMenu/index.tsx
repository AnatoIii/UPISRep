import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface IProps {
  elementId: string;
  children: any;
}

const ContextMenu: React.FC<IProps> = ({ children, elementId }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");

  const handleClick = () => {
    setShowMenu(false);
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();

    setShowMenu(true);
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
  };
  
  useEffect(() => {
    const element = document.getElementById(elementId);

    document.addEventListener("click", handleClick);
    element?.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("click", handleClick);
      document.getElementById(elementId)?.removeEventListener("contextmenu", handleContextMenu);
    }
  }, []);

  if (!showMenu) {
    return null;
  }

  return (
    <div className={styles.menu} style={{ top: yPos, left: xPos }}>
      {children}
    </div>
  );
}

export default ContextMenu;