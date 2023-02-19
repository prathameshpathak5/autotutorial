import { Box, Button, TextField } from "@mui/material";
import Upload from "./upload";
import Navbar from "./Navbar";
import { addDoc, collection, doc, getDocs, where } from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "./Firebase";
import { addOrUpdateDocs, getUserDetails } from "./Firebaseutils";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import Editor from "./Editor";
import { async } from "@firebase/util";
import ImageUpload from "./ImageUpload";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { query } from "firebase/database";
const Tutdescription = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [tags, Tags] = useState("Enter Tags");
  const [url, Url] = useState("Enter Url");
  const [image, setImage] = useState("");
  const [imgurl, setimgurl] = useState("");
  const tutorialCollectionRef = collection(db, "tutorials");
  const editor = useRef(null);
  const [uname, setuname] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    const usersCollectionRef = collection(db, "users");
    const q = query(
      usersCollectionRef,
      where("uid", "==", auth.currentUser.uid)
    );
    // auth.currentUser.uid;
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      setuname("new_user");
    } else {
      const userDoc = doc(db, "users", docs.docs[0].id);
      setuname(userDoc.username);
      console.log(uname);
    }
  };
  const creattutorial = async () => {
    await addDoc(tutorialCollectionRef, {
      title,
      content,
      tags,
      url,
      imgurl,
      uname,
      name: auth.currentUser.email,
      uid: auth.currentUser.uid,
    });

    window.alert("added to db");
  };

  const handlechange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const hadleupload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setimgurl(url);
            console.log(url);
          });
      }
    );
  };

  const paperone = {
    padding: 10,
    height: "auto",
    width: 1000,
    margin: "50px auto",
  };
  // useEffect(() => {
  //   const loadData = async () => {
  //     const { data: details } = await getUserDetails(uid);
  //     settitle(details.title);
  //   };
  //   loadData();
  // }, []);
  // const updateDetails = async () => {
  //   const { id, data: details } = await getUserDetails(uid);
  //   if (details.title !== title) details.title = title;
  //   if (details.content !== content) details.content = content;
  //   if (details.tags !== tags) details.tags = tags;
  //   if (details.url !== url) details.url = url;
  //   addOrUpdateDocs(uid, details);
  // };
  // const updatetitle = (event) => {
  //   settitle(event.target.value);
  //   updateDetails();
  // };
  // const updatecontent = (event) => {
  //   setcontent(event.target.value);
  //   updateDetails();
  // };
  // const updatetags = (event) => {
  //   Tags(event.target.value);
  //   updateDetails();
  // };
  // const updateurl = (event) => {
  //   Url(event.target.value);
  //   updateDetails();
  // };
  const [data, setData] = useState("");
  const handleeditor = (e, editor) => {
    const data = editor.getData();
    setcontent(data);
    console.log(content);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Creat a new post</h2>
      </div>
      <div>
        <Box style={paperone}>
          <h1>
            <b>Title</b>
          </h1>
          <TextField
            onChange={(event) => settitle(event.target.value)}
            fullWidth
            id="fullWidth"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <input type="file" onChange={handlechange}></input>
              <button onClick={hadleupload}>Upload</button>
            </div>
            {/* <ImageUpload /> */}
          </div>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={handleeditor}
            />
          </div>
          <h5 style={{ textalign: "left" }}>Tags</h5>
          <TextField
            type="text"
            placeholder="Press enter to add tags"
            fullWidth
            onChange={(event) => Tags(event.target.value)}
          ></TextField>
          <h5 style={{ textalign: "left" }}>URL</h5>
          <TextField
            type="text"
            fullWidth
            onChange={(event) => Url(event.target.value)}
          ></TextField>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size="medium" variant="contained" onClick={creattutorial}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tutdescription;
