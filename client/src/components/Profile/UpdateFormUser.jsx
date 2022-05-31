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
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import "./Profile.css";

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


  // добавить спорт
  // const [name, setName] = useState('')

  // const addUserSport = (e) => {
  //    e.preventDefault();

  //    const data = { name, phase: e.target.phase.value}

  //   dispatch(postFetchUsersSports(data))
  // }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form action="/profile" onSubmit={updateUser}>
        <div class="personal-image">
          <label class="label">
            <input
              id="img"
              type="file"
              onChange={(e) => handleImageUpload(e, setImageUrl)}
            />
            <figure class="personal-figure">
              {/* {!user.photo ? (
                <>
                  <Avatar
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              ) : imageURL ? (
                <>
                  <Avatar
                    src={imageURL}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              ) : (
                <>
                  <Avatar
                    src={user.photo}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              )} */}
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

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ m: 1, p: 1 }}
          >
            Имя:{" "}
            <TextField
              id="name"
              label="Имя"
              variant="outlined"
              defaultValue={user.name}
              size="small"
            />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ m: 1, p: 1 }}
          >
            Email:{" "}
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              defaultValue={user.email}
              size="small"
            />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ m: 1, p: 1 }}
          >
            О себе:{" "}
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              defaultValue={user.description}
              size="small"
            />
          </Typography>
          {/* <Typography
            variant="body2"
            color="text.secondary"
            sx={{ m: 1, p: 1 }}
          >
            Виды спорта:
            {usersSports.map((usersSports) => (
              <SportButtonCross
                sport={sport}
                key={usersSports.id}
                usersSports={usersSports}
              />
            ))}
          </Typography>
          <Autocomplete
            onChange={(event) => setSport(event.target.innerText)}
            id="country-select-demo"
            sx={{ width: 300 }}
            options={sports}
            autoHighlight
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.title}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a sport"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          /> */}
          <Button type="submit">Сохранить</Button>
        </CardContent>
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
