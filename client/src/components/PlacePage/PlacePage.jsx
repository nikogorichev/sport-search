import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPlacesFetch } from "../../redux/thunk/placesAsync";
import Carousel from "react-material-ui-carousel";
import {
  Box,
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
import {
  ArrowBack,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{
            marginBottom: 5,
            borderRadius: "60px",
            width: 550,
            height: 550,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            textAlign: "center"
          }}>
          <Carousel
            index={index}
            onChange={handleChange}
            interval={40000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover
            swipe
            className="my-carousel"
          >
            {image.map((image, index) => {
              return (
                <CardMedia
                  key={index}
                  component="img"
                  height="350px"
                  src={image.url}
                  alt="sport"
                />
              );
            })}
          </Carousel>
    
            <Typography variant="h5">
              {location[0]?.title}
            </Typography>
       
            <Typography variant="body" >
              {location[0]?.address}
            </Typography>
         

        
            <Typography variant="body" >
              {location[0]?.description}
            </Typography>
         
        </Card>
      </Box>
      <Typography variant="h5" sx={{textAlign: 'center'}}>Проводимые игры:</Typography>
      <div style={{
        display:'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}>
      {event?.map((el) => {
        const filteredUser = allUsers.filter((user) => user.id === el.user_id);
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
  );
}

export default PlacePage;
