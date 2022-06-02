import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFetchUsersSports,
  postFetchUsersSports,
} from "../../redux/thunk/asyncUser";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import SportButton from "./SportButton";
import UpdateFormUser from "./UpdateFormUser";
import "./Profile.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardActions } from "@mui/material";
import { Box } from "@mui/material";
function Profile() {
  const { user } = useSelector((state) => state.user);
  const { usersSports } = useSelector((state) => state.usersSports);
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(getFetchUsersSports());
  }, [dispatch]);


  useEffect(() => {
    dispatch(postFetchUsersSports());
  }, [dispatch]);



  return (
    <>
     
     <Box bgcolor="text.primary" />
     {edit ? (

        <UpdateFormUser />
      ) : (
        <div className="profilePage">
        <Card sx={{ width: 320, }} >
          {user.photo ? (
                <>
                <Box sx={{display:'flex', justifyContent: 'center'}}>
                  <Avatar 
                    src={user.photo}
                    sx={{ width: 200, height: 200,}}
                  ></Avatar>
                  </Box>
                </>
              ) : (
                <>
                 <Box sx={{display:'flex', justifyContent: 'center'}}>
                  <Avatar
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                  </Box>
                </>
              )}
          <CardContent sx={{textAlign:'center'}}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ m: 1, p: 1 }}
            >
              {user.name}
            </Typography>
          
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1 }}
            >
              Email: {user.email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1 }}
            >
              О себе: {user.description}
            </Typography>
            {/* <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1 }}
            >
              Виды спорта:
              {usersSports.map((usersSports) => (
                <SportButton key={usersSports.id} usersSports={usersSports} />
              ))}
            </Typography> */}
          </CardContent>
          <CardActions sx={{display:'flex', justifyContent: 'center'}}>
            <Button
              onClick={() => setEdit((prevEdit) => !prevEdit)}
              value={edit}
            >
              Изменить
            </Button>
          </CardActions>
        </Card>
        </div>
      )}
      <Box/>
     
  
          
                 
         
    </>
  );
}

export default Profile;
