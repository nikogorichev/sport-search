import React from 'react';
import Carousel from "react-material-ui-carousel";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const PlaceItem = ({place, images}) => {
  const navigation = useNavigate();
  const [index, setIndex] = React.useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };
  
  return (
    <Card 
    onClick={() => navigation(`/place/${place.id}`)}
    sx={{
      margin: 5,
      borderRadius: "40px",
      width: 350,
      height: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      textAlign: "center"
    }} >
        
        <Carousel
         index={index}
         onChange={handleChange}
         interval={40000}
         animation="slide"
         indicators={false}
         stopAutoPlayOnHover
         swipe
         className="my-carousel">
          {images.map((image, index) => {
            return <CardMedia
            key={index}
            component="img"
            height="350px"
            src={image.url}
            alt="sport"
            
          />
          })}
        </Carousel>
       
            <Typography variant="h6">{place.title}</Typography>
        
          
          <Typography variant="body2" color="text.secondary">
            {place.address}
          </Typography>
       
       
          <Typography variant="body2" color="text.secondary">
            {place.description}
          </Typography>
       
        
      </Card>
  );
};

export default PlaceItem;
