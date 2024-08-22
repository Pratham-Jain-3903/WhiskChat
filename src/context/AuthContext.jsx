// import { createContext, useEffect, useState } from "react";
// import { auth } from "../firebase";
// import { onAuthStateChanged } from "firebase/auth";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({children}) => {
//   const [currentUser, setCurrentUser] = useState({})
  
//   useEffect (() => {
//     const unsub = onAuthStateChanged (auth, (user) => {
//         setCurrentUser(user);//checks if we have a user and sets it to current user
//         console.log(user)    
//     });

//     return () =>{
//         unsub();
//     }
//     },[]);

//     return (
//     <AuthContext.Provider value={{currentUser}}>
//         {children}
//     </AuthContext.Provider>
//     );
// };

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({}); // Initialize with null

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user)        
    });

    return () => {
      unsub();
    };
  }, []);
            
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

