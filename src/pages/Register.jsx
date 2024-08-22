// import { useState } from "react";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, storage, db } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

// import Add from "../images/addProfilePic.png";
// import "../style.scss";

// const Register = () => {
//   const [err, setErr] = useState(null);
//   const navigate = useNavigate(); // Initialize the navigate function


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];
//     if (!displayName ||!email || !password ) return alert('Please fill all fields');
//     try {
//     // Register user with Firebase authentication
//     const res = await createUserWithEmailAndPassword(auth, email, password);

//     console.log("User registered:", res.user);

//     const storageRef = ref(storage, displayName);

//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       (error) => {
//         setErr("Upload unsuccessful. Please try again.");
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//           await updateProfile(res.user, {
//             displayName,
//             photoURL: downloadURL,
//           });

//           await setDoc(doc(db, "users", res.user.uid), {
//             uid: res.user.uid,
//             displayName,
//             email,
//             photoURL: downloadURL,
//           });

//           await setDoc(doc(db, "userChats", res.user.uid), {});

//           // Use the navigate function to navigate to a different page
//           navigate("/"); // Assuming you want to navigate to the root path
//         });
//       }
//     );
//   } catch (error) {
//     console.error("Error while registering:", error);
//     setErr("Couldn't register you! Please refresh to try again.");
//   }
// };


import Home from './Home';
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate from React Router

import Add from "../images/addProfilePic.png";
import "../style.scss";

const Register = () => {
  const [err, setErr] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // Track successful registration
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    if (!displayName || !email || !password) return alert('Please fill all fields');

    try {
      // Register user with Firebase authentication
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log("User registered:", res.user);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr("Upload unsuccessful. Please try again.");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
            // Mark registration as successful
            setRegistrationSuccess(true);
          });
        }
      );
    } catch (error) {
      console.error("Error while registering:", error);
      setErr("Couldn't register you! Please refresh to try again.");
    }
  };

  // If registration is successful, render the Home component
  if (registrationSuccess) {
    return <Home />;
  }

 
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WhiskChat</span>
        <span className="title">Sign Up</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email id" />
          <input type="password" placeholder="Password" />
          {/* Additional code: Add form validation and requirements for the file input */}
          <input style={{ display: "none" }} type="file" id="file" accept="image/*" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span> Add a smiling profile picture </span>
          </label>
          <button>Sign up</button>
          {err && <span className="error-message">{err}</span>}
        </form>
        <p>Already have an account? <Link to ="/register">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
