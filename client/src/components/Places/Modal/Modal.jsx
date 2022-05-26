import React, {useEffect} from 'react';
import style from './Modal.module.css';

const Modal = ({ isVisible = true, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalDialog} onClick={e => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <span className={style.modalClose} onClick={onClose}>
            &times;
          </span>
        </div>
        {/* <div className={style.modalBody}> */}
          <input placeholder='title'></input>
        {/* </div> */}
        <input placeholder='adress'></input>
        <input placeholder='description'></input>
        <button>ФОТО</button>
      </div>
    </div>
  );
};

export default Modal;