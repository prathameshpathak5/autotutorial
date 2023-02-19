import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Textform from "./Components/Textform";
import fire from "./Components/Firebase";
import UserProfile1 from "./Components/UserProfile1";
import UserProfile2 from "./Components/UserProfile2";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Profileedit from "./Components/Profileedit";
import Addtut from "./Components/Addnewtut";
import Pop from "./Components/Popup";
import Tutdescription from "./Components/Tutdescription";
import Home from "./Components/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
// import fire from "./Firebase";
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasseordError] = useState("");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasseordError("");
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasseordError("Have a password of at least 6 characters");
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test1" element={<UserProfile1 />} />
        <Route path="/test2" element={<UserProfile2 />} />
        <Route path="/test3" element={<Profileedit />} />
        {/* <Route path="/test4" element={<Addtut />} /> */}
        <Route path="/pop" element={<Pop />} />
        <Route path="/tutdes" element={<Tutdescription />} />
      </Routes>
    </Router>
  );
};
export default App;
