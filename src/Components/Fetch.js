import { Typography } from "@mui/material";
import { query } from "firebase/database";
import { collection, doc, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";

const Fetch = (props) => {
  const [name, setname] = useState("");
  const [uplist, setuplist] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const fetchData = async () => {
      const q = query(usersCollectionRef, where("uid", "==", props.uid));
      const docs = await getDocs(q);
      if (docs.docs.length > 0) {
        const userDoc = doc(db, "users", docs.docs[0].id);
        setname(userDoc.username);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <Typography gutterBottom varient="h5" component="div">
        {name}
      </Typography>
    </div>
  );
};

export default Fetch;
