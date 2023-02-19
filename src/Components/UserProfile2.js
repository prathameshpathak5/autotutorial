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
import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
const UserProfile2 = () => {
  const navigate = useNavigate();
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
  const [Username, setUsername] = useState("");
  const [country, setcountry] = useState("");
  const [Userhandle, setUserhandle] = useState("");
  const [oname, setoname] = useState("");
  const [ocountry, setocountry] = useState("");
  const [ohandle, setohandle] = useState("");
  const [owebsite, setowebsite] = useState("");
  const opCollectionRef = collection(db, "orgprofile");
  const createorg = async () => {
    await addDoc(opCollectionRef, {
      Username,
      Userhandle,
      country,
      oname,
      ocountry,
      ohandle,
      owebsite,
      author: { name: auth.currentUser.displayName, uid: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div>
      <Navbar></Navbar>
      <Box
        style={paperStyle}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
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
                  onClick={createorg}
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
                  onClick={() => navigate("/test1")}
                >
                  I DONT WANT TO CREAT ORGANIZATION
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Box>
        <Box style={papertwo}>
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
                    label="Organization Name"
                    placeholder="Enter Orgname"
                    fullWidth
                    required
                    value={oname}
                    onChange={(e) => setoname(e.target.value)}
                  />
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="text"
                    label="Organization Handle"
                    placeholder="Enter OrgHandle"
                    fullWidth
                    required
                    value={ohandle}
                    onChange={(e) => setohandle(e.target.value)}
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
                  value={ocountry}
                  onChange={(e) => setocountry(e.target.value)}
                />
                <Grid item direction="column">
                  <p></p>
                </Grid>
                <Grid item direction="column">
                  <TextField
                    type="url"
                    label="Organization Website"
                    placeholder="Enter OrgWebsite"
                    fullWidth
                    required
                    value={owebsite}
                    onChange={(e) => setowebsite(e.target.value)}
                  />
                </Grid>
                <Grid item direction="column">
                  <p></p>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default UserProfile2;
