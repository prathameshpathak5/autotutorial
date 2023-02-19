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
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Social from "./Smedia/Social";
import fire from "./Firebase";
import Signup from "./Signup";
import { Gradient } from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Navbar from "./Navbar";
const Loginsignup = (props) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [hi, ishi] = useState(true);
  const paperStyle = {
    padding: 10,
    height: "84vh",
    width: 360,
    margin: " auto",
    // backgroundColor: "yellow",
  };
  const paperStyle1 = {
    padding: 10,
    height: "auto",
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
  const [checked, setChecked] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasseordError] = useState("");
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });
  const clearErrors = () => {
    setEmailError("");
    setPasseordError("");
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        navigate("/");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError("There is no user with this mail id");
            break;
          case "auth/wrong-password":
            setPasseordError("Wrong Password - Try Again");
            break;
        }
      });
  };
  const handlePassvisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
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
                  <h2>Sign In</h2>
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
                      onChange={(e) => setPassword(e.target.value)}
                      type={values.showPass ? "text" : "password"}
                      fullWidth
                      label="Enter your password"
                      placeholder="password"
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
                    <Grid alignItems="right">
                      <a href="#" style={{ float: "right" }}>
                        Forgot password?
                      </a>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                  >
                    Sign In
                  </Button>
                  <Typography>
                    Dont Have an account ?
                    <Button onClick={() => navigate("/signup")}>Sign Up</Button>
                  </Typography>
                </Grid>
                <Divider>or login with</Divider>
                <Social />
                {/* <Grid>
              <Social />
            </Grid> */}
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni4W_ssx3U1KqS7a7wY_Q4NVU2hW3CP-1jA&usqp=CAU"
            />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Loginsignup;
