import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddEvents } from "../../redux/thunk/asyncEvents";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { Box, Button, Modal, styled, Typography, Input, InputLabel, Select, MenuItem, FormControl, TextField, InputAdornment, } from '@mui/material'
import { margin, style } from "@mui/system";
import { AccountCircle, AddCircleOutline, GroupAdd } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
})

// const StyledBox = styled(Box)({
//   display: "flex",
//   alignItems: 'center',
//   justifyContent: 'center',
// })

const OpenModal = ({ active, setActive }) => {
  const [imageURL, setImageUrl] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { sports } = useSelector(state => state.events)
  const { places } = useSelector(state => state.events)
  
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
  //ОТРАБАТЫВАЕТ ПРИ ОТПРАВКЕ ФОРМЫ В МОДАЛЬНОМ ОКНЕ
  const newEvent = (e) => {
    e.preventDefault();
    const event = {
      title: e.target.title.value,
      date: e.target.date.value,
      description: e.target.description.value,
      members_count: e.target.members_count.value,
      user_id: user.id,
      sport_id: e.target.sport_id.value,
      place_id: e.target.place_id.value,
      cost: e.target.cost.value,
      image: imageURL,
      phone: e.target.phone.value,
    }
    dispatch(fetchAddEvents(event))
    setActive(false)
  }

  const MyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    backgroundColor: "#1a237e",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));

  return (
<>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
<StyledModal
  open={active}
  onClose={e => setActive(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
      >
        
      <form
    //ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ МЕРОПРИЯТИЯ
    onSubmit={newEvent}
    // className="modal__content"
    onClick={(e) => e.stopPropagation()}
    >
          <Box
            // paddingLeft={15}
            // paddingTop={8}
            display={"flex"}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            width={800} height={700} bgcolor={'white'} borderRadius={4} >
    <Typography marginBottom={2} id="modal-modal-title" variant="h6" component="h2">
      Добавить событие:
            </Typography>
            <TextField
              multiline
              label='Название'
              size="small"
              style={{width:'80%', margin: '5px', }}
              type="text" name="title" />
            <InputLabel text-align left
            >Дата проведения:</InputLabel>
            <TextField
              size="small"
              style={{ width: '80%', margin: '5px', }}
                type="datetime-local" name="date" />
            <TextField
              multiline
              label='Описание'
              size="small"
              style={{ width: '80%', margin: '5px', }}
              type="text" name="description" />
            <TextField
              multiline
              label='Количество участников'
              size="small"
              style={{ width: '80%', margin: '5px', }}
              type="text" name="members_count" />
            <TextField
              multiline
              label='Способ связи'
              size="small"
              style={{ width: '80%', margin: '5px', }}
              type="text" name="phone" />
            <Box
              display={"flex"}
              flexDirection={'row'}
              // alignItems={'center'}
              justifyContent={'row'}
            >
              <Box>
            <InputLabel >Вид спорта:</InputLabel>
            <FormControl>
                  <Select
                
                style={{ width: '310px', margin: '5px', }}
                size="small" name="sport_id">
                {sports.map((el) => <MenuItem value={el.title}>{el.title}</MenuItem>)}
              </Select>
                </FormControl>
              </Box>
              <Box>
            <InputLabel >Место проведения:</InputLabel>
            <FormControl>
              <Select
                style={{ width: '310px', margin: '5px', }}
                size="small" name="place_id" label='Место' >
              {places.map((el) => <MenuItem value={el.title}>{el.title}</MenuItem>)}
            </Select>
                </FormControl>
              </Box>
            </Box>
            <TextField
              multiline
              label='Стоимость'
              size="small"
              style={{ width: '80%', margin: '5px', }}
              type="text" name="cost" defaultValue={0} />
            <br/>
            <TextField
            size="small"
              style={{ width: '80%', margin: '5px', marginBottom: '25px', }}
            id="img"
            type="file"
             onChange={(e) => handleImageUpload(e, setImageUrl)}
            />
            <br/>
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
    </>
  );

};

export default OpenModal;
