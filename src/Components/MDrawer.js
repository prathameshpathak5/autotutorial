import React from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
const MDrawer = () => {
  const navigate = useNavigate();
  const [isDraweropen, setIsdraweropen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsdraweropen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDraweropen}
        onClose={() => setIsdraweropen(false)}
      >
        {/* onClick={() => navigate("/test4") */}
        <Box>
          <Paper>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <HomeOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Button onClick={() => navigate("/")}>Home</Button>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <NotificationsNoneOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Button onClick={() => navigate("/")}>Notification</Button>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <Button onClick={() => navigate("/test1")}>User Profile</Button>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <GroupOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Button onClick={() => navigate("/test2")}>Organization</Button>
              </MenuItem>
              {/* <MenuItem>
                <ListItemIcon>
                  <FeedOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Button onClick={() => navigate("/")}>My Feed</Button>
              </MenuItem> */}

              <MenuItem>
                <ListItemIcon>
                  <ComputerOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Button onClick={() => navigate("/tutdes")}>
                  Add Tutorials
                </Button>
              </MenuItem>
            </MenuList>
          </Paper>
        </Box>
      </Drawer>
    </>
  );
};

export default MDrawer;
