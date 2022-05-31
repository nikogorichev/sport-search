import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./Modal.module.css";
import axios from "axios";
import { newPlacesFetch } from "../../../redux/thunk/placesAsync";
import { useDispatch } from "react-redux";

const Modal = ({ isVisible = true, title, content, footer, onClose }) => {
  const [imageURL, setImageUrl] = useState(null);
  const [imageURL2, setImageUrl2] = useState(null);
  const [imageURL3, setImageUrl3] = useState(null);

  const handleImageUpload = (event, setImg) => {
    const imageData = new FormData();
    imageData.set("key", "ca5482cb4e564b594544191602467167");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const dispatch = useDispatch();
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const inputPlaceTitle = useRef(null);
  const inputPlaceAddress = useRef(null);
  const inputPlaceDescription = useRef(null);

  const onButtonClick = (event) => {
    event.preventDefault();

    const product = {
      img1: imageURL,
      img2: imageURL2,
      img3: imageURL3,
    };

    const data = {
      title: inputPlaceTitle.current.value,
      address: inputPlaceAddress.current.value,
      description: inputPlaceDescription.current.value,
      product,
    };

    dispatch(newPlacesFetch(data));
  };

  return !isVisible ? null : (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <span className={style.modalClose} onClick={onClose}>
            &times;
          </span>
        </div>
        <form
          enctype="multipart/form-data"
          id="addPlace"
          name="addPlace"
          action="/place"
          method="POST"
          onSubmit={onButtonClick}
        >
          <input placeholder="title" ref={inputPlaceTitle} type="text"></input>
          <input
            placeholder="address"
            ref={inputPlaceAddress}
            type="text"
          ></input>
          <input
            placeholder="description"
            ref={inputPlaceDescription}
            type="text"
          ></input>
          <input
            id="img"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl)}
          />
          <input
            id="img2"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl2)}
          />
          <input
            id="img3"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl3)}
          />
          <button type="submit">Добавить площадку</button>

        </form>
      </div>
    </div>
  );
};

export default Modal;
