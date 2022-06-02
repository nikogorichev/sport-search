import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
  styled,
  Box
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
import { fetchDeleteParticipant } from "../../redux/thunk/asyncParticipant";
import UserPage from "../UserPage/UserPage";
import { useNavigate } from "react-router-dom";

function EventsPlayCard({ event, creator }) {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const { allParticipants } = useSelector((state) => state.events);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [block, setBlock] = useState(true);

  const playersCounter = allParticipants.filter(
    (el) => event.id === el.EventId
  );

  const exit = () => {
    const participant = {
      user_id: user.id,
      event_id: event.id,
    };
    dispatch(fetchDeleteParticipant(participant));
    setBlock(!block);
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
    
      {block ? (
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
            }}
          >
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
                      sx={{ bgcolor: "#1a237e" }}
                    >
                      {creator[0].name.slice(0, 1).toUpperCase()}
                    </Avatar>
                  </>
                )
              }
              title={creator[0].name}
              subheader={event.date}
            />
            <UserPage open={open} setOpen={setOpen} user={creator[0]} />
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
                    height="270px"
                    image="https://alfa-basket.ru/images/blog/streetball__2.jpg"
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
                  {places.filter((el) => el.id === event.place_id)[0].title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Способ связи: {event.phone}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Количество участников:
                  {playersCounter.length === event.members_count ? (
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
            <CardActions
              disableSpacing
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={exit}
                variant="contained"
                startIcon={<Close />}
                sx={{
                  backgroundColor: "#dd2c00",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                  borderRadius: "20px",
                }}
              >
                Выйти
              </Button>
            </CardActions>
          </Card>
        </div>
      ) : (
        <h6>Вы не записывались на мероприятия.</h6>
      )}
    </>
  );
}

export default EventsPlayCard;
