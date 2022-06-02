import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  styled,
  Box,
} from "@mui/material";
<<<<<<< HEAD
import { Favorite, FavoriteBorder, MoreVert, Share, GroupAdd, Close, Delete, Edit, ArrowBack } from "@mui/icons-material";
import { fetchDeleteEvent, fetchInitEvents } from '../../redux/thunk/asyncEvents';
import { fetchAddParticipant, fetchDeleteParticipant } from '../../redux/thunk/asyncParticipant';
import OpenModalEdit from '../OpenModalEdit/OpenModelEdit';
=======
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  GroupAdd,
  Close,
  Delete,
  Edit,
  ArrowBack,
} from "@mui/icons-material";
import {
  fetchDeleteEvent,
  fetchInitEvents,
} from "../../redux/thunk/asyncEvents";
import {
  fetchAddParticipant,
  fetchDeleteParticipant,
} from "../../redux/thunk/asyncParticipant";
import OpenModalEdit from "../OpenModalEdit/OpenModelEdit";
import "./EventPage.css";
>>>>>>> 76da908bcc2028462179f68a2c10d074437a8a1c

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

  const playersCounter = allParticipants.filter(
    (el) => event[0].id === el.EventId
  );

  const participant = participants.filter((e) => e.EventId === event[0].id);
  const creator = allUsers.filter((el) => el.id === event[0].user_id);

  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);

  //добавить участие
  const addParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event[0].id,
    };
    dispatch(fetchAddParticipant(participant));
  };

  //удалить участие
  const deleteParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event[0].id,
    };
    dispatch(fetchDeleteParticipant(participant));
  };

  //удалить событие
  const deleteEvent = () => {
    const delEvent = {
      user_id: user.id,
      event_id: event[0].id,
    };
    navigation("/events");
    dispatch(fetchDeleteEvent(delEvent));
  };

  const MyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    backgroundColor: "#1a237e",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));

  return (
    <>
      <Button startIcon={<ArrowBack />} onClick={() => navigation(-1)}></Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            margin: 1,
            borderRadius: "40px",
            width: 550,
            height: 850,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
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
                    sx={{ bgcolor: "#1a237e" }}
                  >
                    {creator[0]?.name.slice(0, 1).toUpperCase()}
                  </Avatar>
                </>
              )
            }
            title={creator[0]?.name}
            subheader={event[0]?.date}
          />
          {event[0]?.image ? (
            <>
              <CardMedia
                component="img"
                height="350px"
                image={event[0]?.image}
                alt="sport"
              />
            </>
          ) : (
            <>
              <CardMedia
                component="img"
                height="350px"
                image="https://alfa-basket.ru/images/blog/streetball__2.jpg"
                alt="sport"
              />
            </>
          )}
          <CardContent sx={{textAlign: "center"}}>
            <Typography variant="h5">{event[0]?.title}</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body" >
              Описание: {event[0]?.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body" >
              Вид спорта:{" "}
              {sports?.filter((el) => el.id === event[0]?.sport_id)[0]?.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body" >
              Место проведения:{" "}
              {places?.filter((el) => el.id === event[0]?.place_id)[0]?.title}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="body" >
              Количество участников:
              {playersCounter.length == event[0]?.members_count ? (
                <p>участники набраны</p>
              ) : (
                ` ${playersCounter.length} / ${event[0]?.members_count}`
              )}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body" >
              Стоимость: {event[0]?.cost}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {user.id === event[0]?.user_id ? (
              <>
                <MyButton
                  onClick={deleteEvent}
                  variant="contained"
                  startIcon={<Delete />}
                  sx={{
                    backgroundColor: "#dd2c00",
                    "&:hover": {
                      backgroundColor: "red",
                    },
                  }}
                >
                  Удалить
                </MyButton>
                <MyButton
                  onClick={() => setModalActive(true)}
                  variant="contained"
                  startIcon={<Edit />}
                >
                  Изменить
                </MyButton>
                <OpenModalEdit
                  active={modalActive}
                  setActive={setModalActive}
                  event={event[0]}
                />
              </>
            ) : participant[0] ? (
              <MyButton
                sx={{
                  backgroundColor: "#ff6e40",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
                onClick={deleteParticipant}
                variant="contained"
                startIcon={<Close />}
              >
                Выйти
              </MyButton>
            ) : (
              <MyButton
                onClick={addParticipant}
                variant="contained"
                startIcon={<GroupAdd />}
              >
                Участвовать
              </MyButton>
            )}
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default EventPage;
