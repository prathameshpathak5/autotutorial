import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./Firebase";
import { getUserDetails, addOrUpdateDocs } from "./Firebaseutils";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { query } from "firebase/database";
const Profileedit = () => {
  // const [data, setData] = useState({
  //   username: "",
  //   userhandle: "",
  //   country: "",
  // });
  const [username, setusername] = useState("");
  const [country, setcountry] = useState("");
  const [website, setwebsite] = useState("");
  const [description, setdescription] = useState("");
  const [facebook, setfacebook] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const uid = auth.currentUser.uid;
  // useEffect(() => {
  //   const loadData = async () => {
  //     const { data: details } = await getUserDetails(auth.currentUser.uid);
  //     setusername(details.username);
  //     setcountry(details.country);
  //     setdescription(details.description);
  //     setwebsite(details.website);
  //     setfacebook(details.facebook);
  //     setlinkedin(details.linkedin);
  //     setgithub(details.github);
  //   };
  //   loadData();
  // }, []);

  // const updateDetails = async () => {
  //   const { id, data: details } = await getUserDetails(auth.currentUser.uid);
  //   if (details.username !== username) details.username = username;
  //   if (details.country !== country) details.country = country;
  //   if (details.description !== description) details.description = description;
  //   if (details.website !== website) details.website = website;
  //   if (details.facebook !== facebook) details.facebook = facebook;
  //   if (details.linkedin !== linkedin) details.linkedin = linkedin;
  //   if (details.github !== github) details.github = github;
  //   addOrUpdateDocs(auth.currentUser.uid, details);
  // };

  // const updateName = (event) => {
  //   setusername(event.target.value);
  //   updateDetails();
  // };
  // const updatecountry = (event) => {
  //   setcountry(event.target.value);
  //   updateDetails();
  // };

  // const updatewebsite = (event) => {
  //   setwebsite(event.target.value);
  //   updateDetails();
  // };
  // const updatedesc = (event) => {
  //   setdescription(event.target.value);
  //   updateDetails();
  // };
  // const updatefb = (event) => {
  //   setfacebook(event.target.value);
  //   updateDetails();
  // };
  // const updatelk = (event) => {
  //   setlinkedin(event.target.value);
  //   updateDetails();
  // };
  // const updategit = (event) => {
  //   setgithub(event.target.value);
  //   updateDetails();
  // };
  const navigate = useNavigate();
  const paperStyle = {
    padding: 5,
    height: "auto",
    width: "auto",
    margin: "0px 155px",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const paperone = {
    padding: 10,
    height: "auto",
    width: "auto",
    margin: "5px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const papertwo = {
    padding: 10,
    height: "auto",
    width: 700,
    margin: "5px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const usersCollectionRef = collection(db, "users");
  const createorupdateuser = async () => {
    const q = query(
      usersCollectionRef,
      where("uid", "==", auth.currentUser.uid)
    );
    // auth.currentUser.uid;
    const docs = await getDocs(q);
    console.log(docs);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        username,
        country,
        website,
        description,
        facebook,
        linkedin,
        github,
        uid: auth.currentUser.uid,
      });
    } else {
      const userDoc = doc(db, "users", docs.docs[0].id);
      console.log(userDoc);
      await setDoc(userDoc, {
        username,
        country,
        website,
        description,
        facebook,
        linkedin,
        github,
        uid: auth.currentUser.uid,
      });
    }
    window.alert("added to db");
  };
  return (
    <div>
      <Navbar></Navbar>
      <Box
        style={paperStyle}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* <Box>
          <Paper style={paperone}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Profile</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Settings</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <NotificationsNoneOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Notification</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <GroupOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Organization</Typography>
              </MenuItem>
            </MenuList>
          </Paper>
        </Box> */}
        <Box style={papertwo}>
          <Paper style={papertwo}>
            <Grid item direction="column">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                    Profile
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    label="Name"
                    placeholder="Name"
                    fullWidth
                    required
                    value={username}
                    onChange={(event) => setusername(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    label="Country"
                    placeholder="Country"
                    fullWidth
                    required
                    value={country}
                    onChange={(event) => setcountry(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    label="Website"
                    placeholder="Website"
                    fullWidth
                    value={website}
                    onChange={(event) => setwebsite(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    label="Description"
                    placeholder="Description"
                    fullWidth
                    value={description}
                    onChange={(event) => setdescription(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Facebook"
                    placeholder="www.facebook.com/user"
                    fullWidth
                    required
                    value={facebook}
                    onChange={(event) => setfacebook(event.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FacebookRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Linkedin"
                    placeholder="www.Linkedin.com/user"
                    fullWidth
                    required
                    value={linkedin}
                    onChange={(event) => setlinkedin(event.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkedInIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Github"
                    placeholder="www.github.com/user"
                    fullWidth
                    required
                    value={github}
                    onChange={(event) => setgithub(event.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GitHubIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                size="medium"
                variant="contained"
                onClick={createorupdateuser}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Profileedit;
