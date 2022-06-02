import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { Favorite, FavoriteBorder, MoreVert, Share, GroupAdd, Close, Delete, Edit, ArrowBack } from "@mui/icons-material";
import { fetchDeleteEvent, fetchInitEvents } from '../../redux/thunk/asyncEvents';
import { fetchAddParticipant, fetchDeleteParticipant } from '../../redux/thunk/asyncParticipant';
import OpenModalEdit from '../OpenModalEdit/OpenModelEdit';

function EventPage(props) {
  const { allUsers } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const { events } = useSelector((state) => state.events);
  const event = events.filter((el) => el.id === Number(id));
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const { allParticipants } = useSelector((state) => state.events);
  const { participants } = useSelector((state) => state.events);
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  const playersCounter = allParticipants.filter(el => event[0].id === el.EventId);

  const participant = participants.filter((e) => e.EventId === event[0].id);
  const creator = allUsers.filter(el => el.id === event[0].user_id)
  

  useEffect(() => { 
    dispatch(fetchInitEvents())
  }, [dispatch])


  //добавить участие
  const addParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event[0].id,
    }
    dispatch(fetchAddParticipant(participant))
  }

  //удалить участие
  const deleteParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event[0].id,
    }
    dispatch(fetchDeleteParticipant(participant))
  }
  
  //удалить событие
  const deleteEvent = () => {
    const delEvent = {
      user_id: user.id,
      event_id: event[0].id,
    }
    navigation('/events')
    dispatch(fetchDeleteEvent(delEvent))
  }

  return (
    <>
      <Button startIcon={<ArrowBack />} onClick={() => navigation(-1)}></Button>
    <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            creator[0]?.photo ? (
              <>
                <Avatar src={creator[0].photo}></Avatar>
              </>
            ) : (
              <>
                <Avatar
                  src="/static/images/avatar/1.jpg"
                  sx={{ bgcolor: "red" }}
                >
                  {creator[0]?.name.slice(0, 1).toUpperCase()}
                </Avatar>
              </>
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={creator[0]?.name}
          subheader={event[0]?.date}
        />
        {event[0]?.image ? (
          <>
        <CardMedia
          component="img"
          height="20%"
          image={event[0]?.image}
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
          <Typography variant="h5">{event[0]?.title}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Описание: {event[0]?.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Вид спорта: {sports?.filter((el) => el.id === event[0]?.sport_id)[0]?.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Место проведения: {places?.filter((el) => el.id === event[0]?.place_id)[0]?.title}
          </Typography>
      </CardContent>
      
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Количество участников:
            {playersCounter.length == event[0]?.members_count ?
              <p>участники набраны</p>
              :
              ` ${playersCounter.length} / ${event[0]?.members_count}`
            }
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Стоимость: {event[0]?.cost}
          </Typography>
        </CardContent>
      <CardActions disableSpacing>
        {user.id === event[0]?.user_id ?
          <>
            <Button onClick={deleteEvent} variant="contained" startIcon={<Delete />} >
              Удалить
            </Button>
            <Button onClick={() => setModalActive(true)} variant="contained" startIcon={<Edit />} >
              Изменить
            </Button>
            <OpenModalEdit active={modalActive} setActive={setModalActive} event={event[0]} />
          </>
          :
          participant[0] ?
            <Button onClick={deleteParticipant} variant="contained" startIcon={<Close />}>
              Выйти
            </Button>
            :
            <Button onClick={addParticipant} variant="contained" startIcon={<GroupAdd />} >
              Участвовать
            </Button>
        }

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
    </>
  );
}

export default EventPage;

