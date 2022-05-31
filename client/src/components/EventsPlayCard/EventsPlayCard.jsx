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
import UserPage from '../UserPage/UserPage';

function EventsPlayCard({event, creator}) {

  const [open, setOpen] = useState(false);
  const { user } = useSelector(state => state.user);
  const { sports } = useSelector((state) => state.events);
  const { places } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [block, setBlock] = useState(true);

  const exit = () => { 
      const participant = {
        user_id: user.id,
        event_id: event.id,
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
              >{creator[0].name.slice(0,1).toUpperCase()}</Avatar>
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
          <Typography variant="h5">
            {event.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Описание: {event.description}
          </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Вид спорта: {sports.filter((el) => el.id === event.sport_id)[0].title}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Место проведения: {places.filter((el) => el.id === event.place_id)[0].title}
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
