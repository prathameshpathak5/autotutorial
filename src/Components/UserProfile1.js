import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import fire, { auth, db } from "./Firebase";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { addDoc, collection } from "firebase/firestore";
const UserProfile = () => {
  const navigate = useNavigate();

  // const [data, setData] = useState({
  //   Username: "",
  //   Userhandle: "",
  // });
  // const { Username, Userhandle } = { ...data };
  // const changeHandler = (e) => {
  //   setData({ ...data, [e.target.Username]: e.target.value });
  // };
  const [Username, setUsername] = useState("");
  const [country, setcountry] = useState("");
  const [Userhandle, setUserhandle] = useState("");
  const upCollectionRef = collection(db, "userprofile");
  const createuser = async () => {
    await addDoc(upCollectionRef, {
      Username,
      Userhandle,
      country,
      author: { name: auth.currentUser.displayName, uid: auth.currentUser.uid },
    });
    navigate("/");
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 680,
    margin: "20px 300px",
    display: "inline-flex",

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
  return (
    <div>
      <Navbar></Navbar>
      {/* <Paper elevation={10} style={paperStyle}> */}
      <Box style={paperStyle}>
        <Box style={paperone}>
          <Grid item xs={3}>
            <Card
              variant="outlined"
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Grid item direction="column">
                  <TextField
                    type="text"
                    label="User Name"
                    placeholder="Enter Username"
                    fullWidth
                    required
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="text"
                    label="User Handle"
                    placeholder="Enter UserHandle"
                    fullWidth
                    required
                    value={Userhandle}
                    onChange={(e) => setUserhandle(e.target.value)}
                  />
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <TextField
                  type="text"
                  label="Country"
                  placeholder="Country"
                  fullWidth
                  required
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="small"
                  onClick={createuser}
                >
                  SUBMIT
                </Button>
              </CardActions>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  fullWidth
                  onClick={() => navigate("/test2")}
                >
                  I WANT TO CREAT ORGANIZATION
                </Button>
              </CardActions>
            </Card>
          </Grid>
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
              src="https://png.pngtree.com/png-vector/20191217/ourmid/pngtree-boy-is-taking-notes-illustration-vector-on-white-background-png-image_2079426.jpg"
            />
          </Container>
        </Box>
      </Box>
      {/* </Paper> */}
    </div>
  );
};

export default UserProfile;
