import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { auth, db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { useEffect } from "react";
const MCard = () => {
  const [tutorialLists, setTutorialList] = useState([]);
  const [name, setname] = useState();
  const [liked, setLiked] = useState(false);
  const tutorialCollectionRef = collection(db, "tutorials");
  const upCollectionRef = collection(db, "userprofile");
  useEffect(() => {
    const getTut = async () => {
      const data = await getDocs(tutorialCollectionRef);
      setTutorialList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTut();
  });
  const handleunLike = () => {
    setLiked(false);
  };
  const handleLike = (type) => {
    setLiked(true);
  };
  const parse = require("html-react-parser");
  return (
    <div>
      {tutorialLists.map((post) => {
        return (
          <Box width="600px">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.imgurl}
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                  <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                  {post.username}
                </Typography>
                <Typography gutterBottom varient="h5" component="div">
                  {post.name}
                </Typography>
                <Typography gutterBottom varient="h5" component="div">
                  {post.title}
                </Typography>
                <Typography gutterBottom varient="h5" component="div">
                  {parse(post.content)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.tags}
                </Typography>
                <Typography gutterBottom varient="h5" component="div">
                  URL:{post.url}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">
                  <ShareOutlinedIcon></ShareOutlinedIcon>
                </Button>
                <Button size="small">
                  <ThumbUpOutlinedIcon />
                </Button>
                <Button size="small">
                  <CommentOutlinedIcon />
                </Button>
                <Button size="small">
                  <BookmarkBorderOutlinedIcon />
                </Button>
                <Button size="small">
                  <MoreVertOutlinedIcon />
                </Button> */}
                {liked ? (
                  <Button size="small" onClick={handleunLike}>
                    <ThumbUpIcon />
                  </Button>
                ) : (
                  <Button size="small" onClick={() => handleLike(1)}>
                    <ThumbUpOffAltIcon />
                  </Button>
                )}
                <Button size="small" onClick={() => handleLike(2)}>
                  <CommentOutlinedIcon />
                </Button>
                <Button size="small" onClick={() => handleLike(3)}>
                  <ShareOutlinedIcon></ShareOutlinedIcon>
                </Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
      <br></br>
    </div>
  );
};

export default MCard;
