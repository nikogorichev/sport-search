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
import { fetchDeleteParticipant } from '../../redux/thunk/asyncParticipant';
import { useNavigate } from 'react-router-dom';

function EventsPlayCard(event) {

  const { user } = useSelector(state => state.user);
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [block, setBlock] = useState(true);

  const exit = () => { 
      const participant = {
        user_id: user.id,
        event_id: event.event.id,
      }
    dispatch(fetchDeleteParticipant(participant))
    setBlock(!block)
  }

  return (
  <>
    { block ? 
        <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={event.event.title}
          subheader={event.event.date}
            />
      <div onClick={() => navigation(`/events/${event.event.id}`)} >
        <CardMedia
          component="img"
          height="20%"
          image="https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/05/GettyImages-1397468129.jpg?crop=0px%2C38px%2C1024px%2C577px&resize=1200%2C675"
          alt="sport"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Описание: {event.event.description}
          </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Вид спорта: {sports.filter((el) => el.id === event.event.sport_id)[0].title}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Место проведения: {places.filter((el) => el.id === event.event.place_id)[0].title}
              </Typography>
            </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Количество участников:{event.event.members_count}
          </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Стоимость: {event.event.cost}
              </Typography>
              </CardContent>
          </div>
        <CardActions disableSpacing>
          <Button onClick={ exit } variant="contained" startIcon={<Close />}>
            Выйти
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
        :
        <h6>Вы не записывались на мероприятия.</h6>
      }
    </>
  );
}

export default EventsPlayCard;
