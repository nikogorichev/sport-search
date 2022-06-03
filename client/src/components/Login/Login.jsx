import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUsersFetch } from "../../redux/thunk/asyncUser";

const theme = createTheme();

function Login() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function signIn(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      password: event.target.password.value,
    };
    dispatch(authUsersFetch(data));
    navigation("/");
  }

  const MyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    backgroundColor: "#1a237e",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://i.pinimg.com/564x/d3/cc/b4/d3ccb4249eb9c7deaef836526ea44fc7.jpg)",
            // backgroundImage: "url(https://i.pinimg.com/564x/e0/05/f7/e005f7549d4213e07840ee5143b84a95.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1a237e" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Тебя ждут
            </Typography>
            <Container maxWidth="xs">
              <form method="post" onSubmit={signIn}>
                <TextField
                  margin="normal"
                  label="Логин"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  autoComplete="name"
                  id="name"
                />
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <OutlinedInput
                    
                      id="password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Пароль"
                    />
                  </FormControl>
                  <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
                <MyButton type="submit" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
                  Войти
                </MyButton>
              </form>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
