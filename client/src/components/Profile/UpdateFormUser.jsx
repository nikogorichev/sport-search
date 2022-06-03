import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  putFetchUser,
  postFetchUserPhoto,
  postFetchUsersSports,
} from "../../redux/thunk/asyncUser";
import SportButtonCross from "./SportButtonCross";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  Avatar,
  Box,
  CardActions,
  CardContent,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import "./Profile.css";
import { Done } from "@mui/icons-material";

function UpdateUser(props) {
  const [imageURL, setImageUrl] = useState(null);
  const { user } = useSelector((state) => state.user);
  const { usersSports } = useSelector((state) => state.usersSports);
  const { sports } = useSelector((state) => state.events);
  console.log(sports);
  const [sport, setSport] = useState("");
  const dispatch = useDispatch();

  const handleImageUpload = (event, setImg) => {
    const imageData = new FormData();
    imageData.set("key", "ca5482cb4e564b594544191602467167");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // изменение имени, емайла и описания в профиле
  useEffect(() => {
    dispatch(putFetchUser());
  }, [dispatch]);

  const updateUser = (event) => {
    // event.preventDefault()
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      description: event.target.description.value,
      photo: imageURL,
      // sport: event.target.sport
    }
    // console.log(data)
    dispatch(putFetchUser(data))
  }


  const MyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    backgroundColor: "#1a237e",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));

  return (
    <Box 
    className="profilePage"
    sx={{ p: 4,
      height: '100%',
      width: 360,
      borderRadius: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",}}>
      <form action="/profile" onSubmit={updateUser}>
        <div class="personal-image">
          <label class="label">
            <input
              id="img"
              type="file"
              onChange={(e) => handleImageUpload(e, setImageUrl)}
            />
            <figure class="personal-figure">
              {imageURL  ? (
                <>
                  <Avatar
                    src={imageURL}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              ) : user.photo ? (
                <>
                 <Avatar
                    src={user.photo}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              ) : (
                <>
                  <Avatar
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              )}
              <figcaption class="personal-figcaption">
                <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />
              </figcaption>
            </figure>
          </label>
        </div>

        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          
            <TextField
              id="name"
              label="Имя"
              variant="outlined"
              defaultValue={user.name}
              size="small"
              sx={{mb: 3}}
            />
          
         
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              defaultValue={user.email}
              size="small"
              sx={{mb: 3}}
            />
        
           
            <TextField
            multiline
            placeholder="Расскажи про свой опыт, навыки, увлечения"
              id="description"
              label="О себе"
              variant="outlined"
              defaultValue={user.description}
              size="small"
            />
         </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <MyButton
               type="submit"
               variant="contained"
                  startIcon={<Done />}
              >
                Принять
              </MyButton>
            </CardActions>
          
        
      </form>
    </Box>
    // <br />
    // <div>
    //   Добавить фотографию:
    //   <br />
    //   <br />
    //   <input id="photo" name="myFile" type="file" />
    // </div>
    // <br />
    // <p>
    //   Имя: <input id="name" defaultValue={user.name} />
    // </p>
    // <p>
    //   Email: <input id="email" defaultValue={user.email} />
    // </p>
    // <p>
    //   О себе: <input id="description" defaultValue={user.description} />
    // </p>
    // <p>
    //   Виды спорта:{" "}
    //   {usersSports.map((usersSports) => (
    //     <SportButtonCross
    //       sport={sport}
    //       key={usersSports.id}
    //       usersSports={usersSports}
    //     />
    //   ))}{" "}
    // </p>

    // <div className="btn-edit">

    // </div>
  );
}

export default UpdateUser;
