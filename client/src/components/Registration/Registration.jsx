import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

function Registration() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

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

  return (
    <Container maxWidth="xs">
      <form method="post">
        <Box mb={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            autoFocus
            autoComplete="email"
            id="email"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            autoFocus
            autoComplete="name"
            id="name"
          />
        </Box>
        <Box mb={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box mb={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Repeat password</InputLabel>
            <OutlinedInput
              id="password2"
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password2"
            />
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  )
}

export default Registration;
