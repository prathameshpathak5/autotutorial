import { imageListClasses } from "@mui/material";
import React from "react";
import { useState } from "react";
import { db, storage } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
const ImageUpload = () => {
  const [image, setImage] = useState(null);
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
            console.log(url);
          });
      }
    );
  };
  return (
    <div>
      <input type="file" onChange={handlechange}></input>
      <button onClick={hadleupload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
