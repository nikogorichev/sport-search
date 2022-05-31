import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Button,

} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share, GroupAdd, Close, Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteEvent } from '../../redux/thunk/asyncEvents';
import OpenModalEdit from '../OpenModalEdit/OpenModelEdit';
import { useNavigate } from 'react-router-dom';

function EventCardCabinet({ event }) {
  const navigation = useNavigate()
  const { user } = useSelector(state => state.user);
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

  //удалить событие
  const deleteEvent = () => {
    const delEvent = {
      user_id: user.id,
      event_id: event.id,
    }
    dispatch(fetchDeleteEvent(delEvent))
  }

  return (

    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
        onClick={() => navigation('/profile')}
          avatar={
            user.photo ? (
              <>
                <Avatar src={user.photo}></Avatar>
              </>
            ) : (
              <>
                <Avatar
                  src="/static/images/avatar/1.jpg"
                  sx={{ bgcolor: "red" }}
                >{user.name.slice(0,1).toUpperCase()}</Avatar>
              </>
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={event.title}
          subheader={event.date}
        />
        {event.image ? (
          <>
            <CardMedia
          component="img"
          height="20%"
          image={event.image}
          alt="sport"
        />
          </>
        ) : (
          <>
            <CardMedia
              component="img"
              height="20%"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkBoZl9OW3hZI5YFb08B_L-XUlxCnmqs8fQ&usqp=CAU"
              alt="sport"
            />
          </>
        )}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           Описание: {event.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Вид спорта: {sports.filter((el) => el.id === event.sport_id)[0].title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Место проведения: {places.filter((el) => el.id === event.place_id)[0].title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Количество участников:{event.members_count}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Стоимость: {event.cost}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={() => setModalActive(true)} variant="contained" startIcon={<Edit />} >
            Изменить
          </Button>
          <OpenModalEdit active={modalActive} setActive={setModalActive} event={ event }/>
          <Button onClick={ deleteEvent } variant="contained" startIcon={<Delete />} >
            Удалить
          </Button>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default EventCardCabinet;
