import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const Addnewtut = () => {
  const navigate = useNavigate();
  const paperone = {
    padding: 1,
    display: "inline-flex",
  };
  // const media: {
  //     height: 140
  // };
  const navItems = ["KMIT", "PP"];
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <br></br>
        <Box
          style={{
            padding: 1,
            height: "auto",
            width: 1000,
            margin: "20px 100px",
            display: "inline-flex",
          }}
          alignItems="left"
          justifyContent="left"
        >
          <Box style={paperone}>
            <Grid>
              <Card
                variant="outlined"
                style={{
                  justifyContent: "left",
                  alignContent: "left",
                  alignItems: "left",
                }}
              >
                <CardContent>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Box>
          <Box style={paperone}>
            <Grid item xs={5}>
              <Card
                variant="outlined"
                style={{
                  justifyContent: "left",
                  alignContent: "left",
                  alignItems: "left",
                }}
              >
                <CardContent>
                  <Button fullWidth onClick={() => navigate("/tutdes")}>
                    +ADD NEW CODELABZ
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Addnewtut;
