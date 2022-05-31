import React, { useEffect, useState } from "react";
import './EventCard.css'
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
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  GroupAdd,
  Close,
  Delete,
  Edit,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddParticipant,
  fetchDeleteParticipant,
} from "../../redux/thunk/asyncParticipant";
import { fetchDeleteEvent } from "../../redux/thunk/asyncEvents";
import OpenModalEdit from "../OpenModalEdit/OpenModelEdit";
import UserPage from "../UserPage/UserPage";
import { useNavigate } from "react-router-dom";


function EventCard({ event, participants, creator }) {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { allParticipants } = useSelector((state) => state.events);
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const navigation = useNavigate();

  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  // Фильтр по количеству игроков к каждому мероприятию

  const playersCounter = allParticipants.filter(el => event.id === el.EventId)


  //добавить участие
  const addParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event.id,
    };
    dispatch(fetchAddParticipant(participant));
  };

  //удалить участие
  const deleteParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event.id,
    };
    dispatch(fetchDeleteParticipant(participant));
  };

  //удалить событие
  const deleteEvent = () => {
    const delEvent = {
      user_id: user.id,
      event_id: event.id,
    };
    dispatch(fetchDeleteEvent(delEvent));
  };

  return (
<div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
        onClick={() => setOpen(true)}
          avatar={
            creator[0].photo ? (
              <>
                <Avatar src={creator[0].photo}></Avatar>
              </>
            ) : (
              <>
                <Avatar
                  src="/static/images/avatar/1.jpg"
                  sx={{ bgcolor: "red" }}
                >
                  {creator[0].name.slice(0, 1).toUpperCase()}
                </Avatar>
              </>
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={creator[0].name}
          subheader={event.date}
        />
        <div onClick={ () => navigation(`/events/${event.id}`)} >
        <UserPage open={open} setOpen={setOpen} user={creator[0]}/>
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
          <Typography variant="h5">{event.title}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Описание: {event.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Вид спорта:{" "}
            {sports.filter((el) => el.id === event.sport_id)[0].title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Место проведения:{" "}
            {places.filter((el) => el.id === event.place_id)[0].title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Количество участников:
            {playersCounter.length == event.members_count ? (
              <p>участники набраны</p>
            ) : (
              ` ${playersCounter.length} / ${event.members_count}`
            )}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Стоимость: {event.cost}
          </Typography>
          </CardContent>
      </div>
        <CardActions disableSpacing>
          {user.id === event.user_id ? (
            <>
              <Button
                onClick={deleteEvent}
                variant="contained"
                startIcon={<Delete />}
              >
                Удалить
              </Button>
              <Button
                onClick={() => setModalActive(true)}
                variant="contained"
                startIcon={<Edit />}
              >
                Изменить
              </Button>
              <OpenModalEdit
                active={modalActive}
                setActive={setModalActive}
                event={event}
              />
            </>
          ) : participants[0] ? (
            <Button
              onClick={deleteParticipant}
              variant="contained"
              startIcon={<Close />}
            >
              Выйти
            </Button>
          ) : (
            <Button
              onClick={addParticipant}
              variant="contained"
              startIcon={<GroupAdd />}
            >
              Участвовать
            </Button>
          )}

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

export default EventCard;
