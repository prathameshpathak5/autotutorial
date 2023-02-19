import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Social from "./Smedia/Social";
import fire from "./Firebase";
import Navbar from "./Navbar";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Signup = (props) => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 10,
    height: "84vh",
    width: 360,
    margin: "auto",
  };
  const paperStyle1 = {
    padding: 10,
    height: "90vh",
    width: 360,
    margin: " auto",
    // backgroundColor: "yellow",
  };
  const paperone = {
    padding: 10,
    height: "auto",
    width: 370,
    margin: "50px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const papertwo = {
    padding: 10,
    height: "auto",
    width: 310,
    margin: "50px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const avatarStyle = {
    backgroundColor: "#00A1F1",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasseordError] = useState("");
  const [checked, setChecked] = useState(true);
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });
  const clearErrors = () => {
    setEmailError("");
    setPasseordError("");
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        navigate("/test1");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasseordError("Have a password of at least 6 characters");
            break;
        }
      });
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handlePassvisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <Box
        style={paperStyle1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {" "}
        <Box style={paperone}>
          <Container>
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <h2>Sign Up</h2>
                  <Grid item direction="column">
                    <TextField
                      type="email"
                      label="Username"
                      placeholder="Enter Username"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item direction="column">
                    <p>{emailError}</p>
                  </Grid>
                  <Grid item direction="column">
                    <TextField
                      type="password"
                      required
                      fullWidth
                      label="Enter your password"
                      placeholder="password"
                      value={password}
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                  </Grid>
                  <Grid item direction="column">
                    <TextField
                      type={values.showPass ? "text" : "password"}
                      fullWidth
                      label="Confirm password"
                      placeholder="confirmpassword"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment positon="end">
                            <IconButton
                              onClick={handlePassvisibilty}
                              aria-label="toggle password"
                              edge="end"
                            >
                              {values.showPass ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item direction="column">
                    <p>{passwordError}</p>
                  </Grid>
                  <Grid container alignItems="center" justify="space-between">
                    <Grid>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChange}
                              color="primary"
                            />
                          }
                          label="Remember me"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSignup}
                  >
                    Sign Up
                  </Button>

                  <Typography>
                    Have an account ?
                    <Button onClick={() => navigate("/")}>Sign In</Button>
                  </Typography>
                  <Divider>or login with</Divider>
                </Grid>
                <Social />
              </Paper>
            </Grid>
          </Container>
        </Box>
        <Box style={papertwo}>
          <Container>
            <Box
              component="img"
              sx={{
                height: 400,
                width: 400,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZKmoD95W6yIrICkkXzSixS_RufP25ZYp9w&usqp=CAU"
            />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
