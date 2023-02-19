import {
  AppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import D from "./MDrawer";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import fire, { auth } from "./Firebase";
import { styled, alpha, makeStyles } from "@mui/material/styles";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    fire.auth().signOut();
    navigate("/login");
  };
  const handleLogin = () => {
    fire.auth().signOut();
    navigate("/login");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  // const useStyles = makeStyles((theme) => ({
  //   menuButton: {
  //     marginLeft: theme.spacing(2),
  //   },
  //   title: {
  //     marginLeft: "auto",
  //   },
  //   drawer: {
  //     width: 300,
  //     marginTop: 100,
  //   },
  //   iconAlign: {
  //     marginLeft: 160,
  //   },
  //   ListItem: {
  //     marginTop: 10,
  //   },
  //   content: {
  //     padding: theme.spacing(9),
  //   },
  // }));
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <D />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => navigate("/")}
              sx={{
                color: "white",
              }}
            >
              AutoTutorial
            </Button>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
          </IconButton>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {/* <MenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Button color="inherit" onClick={() => navigate("/test3")}>
              Profile
            </Button>
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </MenuItem> */}
          <MenuItem onClick={() => navigate("/tutdes")}>My Tutorials</MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Button color="inherit" onClick={() => navigate("/test3")}>
              Profile
            </Button>
          </MenuItem>
          {/* <MenuItem onClick={handleClose}>Manage All</MenuItem> */}
          <Divider></Divider>
          {/* <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem> */}
          <MenuItem>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          </MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};

export default Navbar;
