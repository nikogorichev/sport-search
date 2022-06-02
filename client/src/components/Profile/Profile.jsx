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
import { Avatar, CardActions, styled } from "@mui/material";
import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";
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

  const MyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    backgroundColor: "#1a237e",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));

  return (
    <>
      <Box
        sx={{
          margin: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {edit ? (
          <UpdateFormUser />
        ) : (
         
          <Card
          className="profilePage"
            sx={{
              p: 4,
              height: '100%',
              width: 360,
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {user.photo ? (
              <>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src={user.photo}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </Box>
              </>
            )}
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ m: 1, p: 1, fontSize: '36px' }}
              >
                {user.name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ m: 1, p: 1, fontSize: '20px' }}
              >
                Email: {user.email}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ m: 1, p: 1, fontSize: '18px'  }}
              >
                О себе: {user.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <MyButton
                onClick={() => setEdit((prevEdit) => !prevEdit)}
                value={edit}
                variant="contained"
                  startIcon={<Edit />}
              >
                Изменить
              </MyButton>
            </CardActions>
          </Card>
          
        )}
      </Box>
    </>
  );
}

export default Profile;
