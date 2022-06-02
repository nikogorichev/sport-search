import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPlacesFetch } from "../../redux/thunk/placesAsync";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBack, Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import EventCard from "../EventCard/EventCard";

function PlacePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPlacesFetch());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);
  const { id } = useParams()
  const navigation = useNavigate();
  const { places } = useSelector((state) => state.places);
  const { images } = useSelector((state) => state.places);
  const { events } = useSelector((state) => state.events);
  const { allUsers } = useSelector((state) => state.events);
  const { participants } = useSelector((state) => state.events);

  const location = places.filter(el => el.id === +id)
  const image = images.filter(el => el.place_id === location[0]?.id)

  const event = events.filter(el => el.place_id === location[0]?.id)

  const [index, setIndex] = useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  return (
    <>
      <Button startIcon={<ArrowBack />} onClick={() => navigation(-1)}></Button>
      <Card sx={{ margin: 5, maxWidth: '500px' }} >
        <CardHeader

          title={location[0]?.title}
          subheader={location[0]?.address}
        />
        <Carousel
          index={index}
          onChange={handleChange}
          interval={40000}
          animation="slide"
          indicators={false}
          stopAutoPlayOnHover
          swipe
          className="my-carousel">
          {image.map((image, index) => {
            return <CardMedia
              key={index}
              component="img"
              height="20%"
              src={image.url}
              alt="sport"

            />
          })}
        </Carousel>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {location[0]?.description}
          </Typography>
        </CardContent>

      </Card>
      <Typography sx={{
        display: "flex",
        justifyContent: "center",
      }} variant="h5" >
        Проводимые игры:
      </Typography>
      <div className='eventCard' style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
        {event?.map((el) => {
          const filteredUser = allUsers.filter(
            (user) => user.id === el.user_id
          );
          return (
            <EventCard
              key={el.id}
              event={el}
              creator={filteredUser}
              participants={participants.filter((e) => e.EventId === el.id)}
            />

          );
        })}
      </div>
    </>
  )
}

export default PlacePage;
