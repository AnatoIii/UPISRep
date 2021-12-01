import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #52DA3D',
    borderRadius: '20px',
    background: '#fafafa'
  },
};

interface IProps {
  isModalOpened: boolean;
  onClose: () => void;
  children: any;
}

const IPSModal: React.FC<IProps> = ({ isModalOpened, children, onClose }: IProps) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Modal"
      >
        {children}
      </Modal>
    </div>
  );
}

export default IPSModal;