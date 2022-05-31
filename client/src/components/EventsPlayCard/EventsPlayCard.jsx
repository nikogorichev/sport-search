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

function EventsPlayCard(event) {

  const { user } = useSelector(state => state.user);
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

console.log('sep event', block)

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
        <CardMedia
          component="img"
          height="20%"
          image="https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/05/GettyImages-1397468129.jpg?crop=0px%2C38px%2C1024px%2C577px&resize=1200%2C675"
          alt="sport"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {event.event.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Количество участников:{event.event.members_count}
          </Typography>
        </CardContent>
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