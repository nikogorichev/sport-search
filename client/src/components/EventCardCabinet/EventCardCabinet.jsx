import React from 'react';
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

function EventCardCabinet({ event }) {

  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

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
          title={event.title}
          subheader={event.date}
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/05/GettyImages-1397468129.jpg?crop=0px%2C38px%2C1024px%2C577px&resize=1200%2C675"
          alt="sport"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Количество участников:{event.members_count}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="contained" startIcon={<Edit />} >
            Изменить
          </Button>
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