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
    <Card sx={{ margin: 5, maxWidth: '500px' }} >
        <CardHeader
          action={
            <IconButton aria-label="settings" >
              <MoreVert />
            </IconButton>
          }
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
            height="20%"
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
        <CardActions disableSpacing>
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
  );
};

export default PlaceItem;
