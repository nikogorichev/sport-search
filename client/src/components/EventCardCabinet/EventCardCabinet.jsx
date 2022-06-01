import React, { useState } from "react";
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
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  GroupAdd,
  Close,
  Edit,
  Delete,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteEvent } from "../../redux/thunk/asyncEvents";
import OpenModalEdit from "../OpenModalEdit/OpenModelEdit";
import { useNavigate } from "react-router-dom";
import "./EventCardCabinet.css";

function EventCardCabinet({ event }) {
  const navigation = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

  //удалить событие
  const deleteEvent = () => {
    const delEvent = {
      user_id: user.id,
      event_id: event.id,
    };
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
    <div>
      <Card
        sx={{
          margin: 5,
          borderRadius: "40px",
          width: 450,
          height: 800,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "#f0f4c3",
        }}
      >
        <CardHeader
          onClick={() => navigation("/profile")}
          avatar={
            user.photo ? (
              <>
                <Avatar src={user.photo}></Avatar>
              </>
            ) : (
              <>
                <Avatar
                  src="/static/images/avatar/1.jpg"
                  sx={{ bgcolor: "#1a237e" }}
                >
                  {user.name.slice(0, 1).toUpperCase()}
                </Avatar>
              </>
            )
          }
          title={event.title}
          subheader={event.date}
        />
        <div onClick={() => navigation(`/events/${event.id}`)}>
          {event.image ? (
            <>
              <CardMedia
                component="img"
                height="270px"
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
            <Typography variant="h6">{event.title}</Typography>
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
              {places.filter((el) => el.id === event.place_id)[0].address}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Способ связи: {event.phone}
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
        </div>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center" }}
        >
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
            event={event}
          />
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
        </CardActions>
      </Card>
    </div>
  );
}

export default EventCardCabinet;
