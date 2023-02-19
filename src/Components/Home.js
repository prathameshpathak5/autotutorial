import {
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import Mcard from "./MCard";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
const Home = () => {
  const paperStyle = {
    padding: 5,
    height: "auto",
    width: "auto",
    margin: "0px 155px",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const paperone = {
    height: "auto",
    width: "auto",
    margin: "auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
  };
  const papertwo = {
    padding: 10,
    height: "auto",
    width: 700,
    margin: "10px auto",
    display: "inline-flex",

    // backgroundColor: "yellow",
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
        {/* <Box> */}
        {/* <Paper style={paperone}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <HomeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Home</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <NotificationsNoneOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Notification</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Settings</Typography>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <GroupOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Organization</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <FeedOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">My Feed</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <BookmarksOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Bookmarks</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ComputerOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Tutorials</Typography>
              </MenuItem>
            </MenuList>
          </Paper> */}
        {/* <Paper style={papertwo}> */}
        <Mcard />
        {/* </Paper> */}
        {/* </Box> */}
      </Box>
    </div>
  );
};

export default Home;
