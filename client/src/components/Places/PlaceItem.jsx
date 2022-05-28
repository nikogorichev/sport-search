import React from 'react';
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
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";


const PlaceItem = ({place}) => {
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
        
        <CardMedia
          component="img"
          height="20%"
          image="https://www.oblgazeta.ru/media/article_photos/42cff34ba6ffb5f3d5d3da576637957579c9fe79ed71ac31f275a992.jpg.1024x0_q85.jpg"
          alt="sport"
        />
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
