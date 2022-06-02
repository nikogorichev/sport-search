import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditEvent } from "../../redux/thunk/asyncEvents";
import { useNavigate } from 'react-router-dom'
import { fetchAddEvents } from "../../redux/thunk/asyncEvents";
import axios from "axios";
import { Box, Button, Modal, styled, Typography, Input, InputLabel, Select, MenuItem, FormControl, TextField, InputAdornment, } from '@mui/material'
import { margin, style } from "@mui/system";
import { AccountCircle, AddCircleOutline, GroupAdd } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
})

const OpenModalEdit = ({ active, setActive, event }) => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { sports } = useSelector(state => state.events)
  const { places } = useSelector(state => state.events)




  //ОТРАБАТЫВАЕТ ПРИ ОТПРАВКЕ ФОРМЫ В МОДАЛЬНОМ ОКНЕ
  const editEvent = (e) => {
    e.preventDefault();
    const editEvent = {
      title: e.target.title.value,
      date: e.target.date.value,
      description: e.target.description.value,
      members_count: e.target.members_count.value,
      user_id: user.id,
      sport_id: e.target.sport_id.value,
      place_id: e.target.place_id.value,
      cost: e.target.cost.value,
      event: event.id,
      phone: e.target.phone.value,
    }
    console.log('EVENT',editEvent)
    dispatch(fetchEditEvent(editEvent))
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
    // <div className={active ? "modal active" : "modal"}
    //   onClick={() => setActive(false)}>
    //   <form
    //     //ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ МЕРОПРИЯТИЯ
    //     onSubmit={ editEvent }
    //     className="modal__content"
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     <h5>Изменить событие:</h5>
    //     <p class="card-title">Название:</p>
    //     <input type="text" name="title" defaultValue={event?.title}/>
    //     <p class="card-text">Дата мероприятия:</p>
    //     <input type="datetime-local" name="date" defaultValue={event?.date}/>
    //     <p class="card-text">Описание:</p>
    //     <input type="text" name="description" defaultValue={event?.description}/>
    //     <p class="card-text">Способ связи:</p>
    //     <input type="text" name="phone" defaultValue={event.phone}/>
    //     <p class="card-text">Количество участников:</p>
    //     <input type="text" name="members_count" defaultValue={event?.members_count}/>
    //     <p class="card-text">Вид спорта:</p>
    //     <select name="sport_id">
    //       {sports.map((el) => <option>{el?.title}</option>)}
    //     </select>
    //     <p class="card-text">Место проведения:</p>
    //     <select name="place_id">
    //       {places.map((el) => <option>{el?.title}</option>)}
    //     </select>
    //     <p class="card-text">Стоимость:</p>
    //     <input type="text" name="cost" defaultValue={event?.cost}/>
    //     <button type="submit">
    //       Ответить
    //     </button>
    //   </form>
    // </div>
    <>
    <StyledModal
      open={active}
      onClose={e => setActive(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <form
        //ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ МЕРОПРИЯТИЯ
        onSubmit={editEvent}
        // className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          // paddingLeft={15}
          // paddingTop={8}
          display={"flex"}
          flexDirection={'column'}
          alignItems={'center'}
            justifyContent={'space-around'}
            padding={'20px'}
            bgcolor={"background.default"}
          color={"text.primary"}
          width={800} height={700} borderRadius={20} >
          <Typography marginBottom={2} id="modal-modal-title" variant="h6" component="h2">
            Изменить событие:
          </Typography>
            <TextField
            // defaultValue={event?.title}
            multiline
            defaultValue={event?.title}
            size="small"
            style={{ width: '80%', margin: '5px', }}
            type="text" name="title" />
          <InputLabel text-align='left'
          >Дата проведения:</InputLabel>
            <TextField
            defaultValue={event?.date}
            required
            size="small"
            style={{ width: '80%', margin: '5px', }}
            type="datetime-local" name="date" />
            <TextField
            defaultValue={event?.description}  
            multiline
            label='Описание'
            size="small"
            style={{ width: '80%', margin: '5px', }}
            type="text" name="description" />
            <TextField
            defaultValue={event?.members_count}
            multiline
            label='Количество участников'
            size="small"
            style={{ width: '80%', margin: '5px', }}
            type="text" name="members_count" />
            <TextField
              defaultValue={event.phone}
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
                required
                  style={{ width: '300px', margin: '5px', }}
                  size="small" name="sport_id">
                  {sports.map((el) => <MenuItem value={el.title}>{el.title}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <InputLabel >Место проведения:</InputLabel>
              <FormControl>
                  <Select
                    required
                  style={{ width: '300px', margin: '5px', }}
                  size="small" name="place_id" label='Место' >
                  {places.map((el) => <MenuItem value={el.title}>{el.title}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
          </Box>
            <TextField
            defaultValue={event?.cost}
            multiline
            label='Стоимость'
            size="small"
            style={{ width: '80%', margin: '5px', }}
            type="text" name="cost"/>
          <br />
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

export default OpenModalEdit;
