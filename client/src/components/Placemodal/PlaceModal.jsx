import React, { useCallback, useEffect, useRef, useState } from "react";

import axios from "axios";
import { newPlacesFetch } from "../../redux/thunk/placesAsync";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  styled,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const PlaceModal = ({ active, setActive }) => {
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

  const onButtonClick = (event) => {
    event.preventDefault();

    const product = {
      img1: imageURL,
      img2: imageURL2,
      img3: imageURL3,
    };

    const data = {
      title: event.target.title.value,
      address: event.target.address.value,
      description: event.target.description.value,
      product,
    };
    console.log(data);
    dispatch(newPlacesFetch(data));
    setActive(false);
  };

  const MyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    backgroundColor: "#1a237e",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));

  return (
    <StyledModal
      open={active}
      onClose={(e) => setActive(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form
        enctype="multipart/form-data"
        id="addPlace"
        name="addPlace"
        action="/place"
        method="POST"
        onSubmit={onButtonClick}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          // paddingLeft={15}
          // paddingTop={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          bgcolor={"background.default"}
          color={"text.primary"}
          width={600}
          height={700}
          borderRadius={20}
        >
          <Typography
            marginBottom={2}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Добавить площадку:
          </Typography>
          <TextField
            multiline
            style={{ width: "60%", margin: "5px" }}
            label="Название"
            name="title"
            type="text"
          ></TextField>
          <TextField
          style={{ width: "60%", margin: "5px" }}
            multiline
            label="Адрес"
            name="address"
            type="text"
          ></TextField>
          <TextField
          style={{ width: "60%", margin: "5px" }}
            multiline
            label="Описание"
            name="description"
            type="text"
          ></TextField>
          <TextField
          style={{ width: "60%", margin: "5px" }}
            id="img"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl)}
          />
          <TextField
          style={{ width: "60%", margin: "5px" }}
            id="img2"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl2)}
          />
          <TextField
          style={{ width: "60%", margin: "5px" }}
            id="img3"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl3)}
          />
          <MyButton
            type="submit"
            variant="contained"
            startIcon={<AddCircleOutline />}
          >
            ДОБАВИТЬ
          </MyButton>
        </Box>
      </form>
    </StyledModal>
  );
};

export default PlaceModal;
