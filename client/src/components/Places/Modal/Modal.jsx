import React, { useEffect, useRef } from 'react';
import style from './Modal.module.css';
import { newPlacesFetch } from '../../../redux/thunk/placesAsync';
import { useDispatch } from 'react-redux';

const Modal = ({ isVisible = true, title, content, footer, onClose }) => {
  const dispatch = useDispatch()
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
  const inputPlaceTitle = useRef(null)
  const inputPlaceAddress = useRef(null)
  const inputPlaceDescription = useRef(null)

  const onButtonClick = (event) => {
    event.preventDefault()
    const data = { title: inputPlaceTitle.current.value, address: inputPlaceAddress.current.value, description: inputPlaceDescription.current.value }
    // const title = inputPlaceTitle.current.value
    // const address = inputPlaceAddress.current.value
    // const description = inputPlaceDescription.current.value
    dispatch(newPlacesFetch(data))
  }

  return !isVisible ? null : (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalDialog} onClick={e => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <span className={style.modalClose} onClick={onClose}>
            &times;
          </span>
        </div>
        <form id="addPlace" name="addPlace" action='/place' method='POST' onSubmit={onButtonClick}>
          <input placeholder='title' ref={inputPlaceTitle} type="text"></input>
          <input placeholder='address' ref={inputPlaceAddress} type="text"></input>
          <input placeholder='description' ref={inputPlaceDescription} type="text"></input>
          <button>ФОТО</button>
          <button >Добавить площадку</button>
        </form>
      </div>
    </div>
  );
};



export default Modal;