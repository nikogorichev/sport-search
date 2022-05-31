import React, { useEffect, useState } from "react";
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
import { Favorite, FavoriteBorder, MoreVert, Share, GroupAdd, Close, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddParticipant, fetchDeleteParticipant } from '../../redux/thunk/asyncParticipant'
import { fetchDeleteEvent } from "../../redux/thunk/asyncEvents";

function EventCard({ event, participants, }) {

  const { user } = useSelector(state => state.user);
  const { allParticipants } = useSelector((state) => state.events);
  console.log(allParticipants);

  const dispatch = useDispatch();
  
  // Фильтр по количеству игроков к каждому мероприятию
  const playersCounter = allParticipants.filter(el => event.id === el.EventId )
  console.log('playersCounter', playersCounter)

  // const [counter, setCounter] = useState(playersCounter.length);

  //добавить участие
  const addParticipant = () => { 
    const participant = {
      user_id: user.id,
      event_id: event.id,
    }
    dispatch(fetchAddParticipant(participant))
  }

//удалить участие
  const deleteParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event.id,
    }
    dispatch(fetchDeleteParticipant(participant))
  }

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
            Количество участников:{ playersCounter.length }/{event.members_count}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {user.id === event.user_id ? 
            <Button onClick={ deleteEvent } variant="contained" startIcon={<Delete />} >
              Удалить
            </Button>
            :
            participants[0] ?
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
    </div>
  );
}

export default EventCard;
