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
import { Favorite, FavoriteBorder, MoreVert, Share, GroupAdd, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddParticipant, fetchDeleteParticipant } from '../../redux/thunk/asyncParticipant'

function EventCard({ event, participants, }) {

  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const addParticipant = () => { 
    const participant = {
      user_id: user.id,
      event_id: event.id,
    }
    dispatch(fetchAddParticipant(participant))
  }

  const deleteParticipant = () => {
    const participant = {
      user_id: user.id,
      event_id: event.id,
    }
    dispatch(fetchDeleteParticipant(participant))
  }

  return (
    // <div class="card" style={{ width: "18rem" }}>
    //   <div class="card-body">
    //     <h5 class="card-title">{event.title}</h5>
    //     <p class="card-text">Дата мероприятия:{event.date}</p>
    //     <p class="card-text">Описание:{event.description}</p>
    //     <p class="card-text">Количество участников:{event.members_count}</p>
    //     <p class="card-text">Стоимость:{event.cost}</p>
    //   </div>
    // </div>
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

          {participants[0] ?
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
