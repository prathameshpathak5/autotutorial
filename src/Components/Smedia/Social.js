import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import { signInWithGoogle, signInWithFacebook } from "../Firebase";
import { color } from "@mui/system";
const Social = () => {
  return (
    <div>
      <Grid container spacing={12} direction="row" justifyContent={"center"}>
        <Grid item sm={4}>
          <GoogleIcon style={{ color: "red" }} onClick={signInWithGoogle} />
        </Grid>
        <Grid item sm={4}>
          <FacebookIcon
            style={{ color: "blue" }}
            onClick={signInWithFacebook}
          />
        </Grid>
        <Grid item sm={4}>
          <GitHubIcon style={{ color: "black" }} />
        </Grid>
        {/* <Grid item sm={3}>
          <TwitterIcon style={{ color: "blue" }} />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Social;
