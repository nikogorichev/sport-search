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


const PlaceItem = ({place, images}) => {

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };
  
  return (
    <Card sx={{
      margin: 5,
      borderRadius: "40px",
      width: 450,
      height: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      textAlign: "center"
    }} >
        <CardHeader
          title={place.title}
          subheader={place.address}
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
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {place.description}
          </Typography>
        </CardContent>
        
      </Card>
  );
};

export default PlaceItem;
