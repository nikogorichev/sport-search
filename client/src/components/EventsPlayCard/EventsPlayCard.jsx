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

function EventsPlayCard({event, creator}) {

  console.log(event);
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

console.log('sep event', block)

  return (
  <>
    { block ? 
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
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
        <CardMedia
          component="img"
          height="20%"
          image="https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/05/GettyImages-1397468129.jpg?crop=0px%2C38px%2C1024px%2C577px&resize=1200%2C675"
          alt="sport"
        />
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
