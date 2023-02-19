import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Social from "./Smedia/Social";
import fire from "./Firebase";
import Signup from "./Signup";
import Navbar from "./Navbar";
const Loginsignup = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 350,
    margin: "80px auto",
  };
  const avatarStyle = {
    backgroundColor: "#00A1F1",
  };
  const { email, setEmail, setPassword, password } = props;
  const [checked, setChecked] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasseordError] = useState("");
  const clearErrors = () => {
    setEmailError("");
    setPasseordError("");
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
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
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Container>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
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
                  label="Password"
                  placeholder="Enter Password"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                onClick={() => (isSignup ? handleSignup() : handleLogin())}
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </Button>
              <Button
                onClick={() => setIsSignup(!isSignup)}
                sx={{ marginTop: 3, borderRadius: 3 }}
              >
                {isSignup
                  ? "Don't have an account ? Sign Up"
                  : "Have an account ? Sign In"}
              </Button>
              <Divider>or login with</Divider>
            </Grid>
            <Social />
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Loginsignup;
