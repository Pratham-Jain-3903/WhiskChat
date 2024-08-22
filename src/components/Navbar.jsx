import React, { useContext } from 'react'; // Import useContext
import Uttakarshika from '../images/uttakarshika.jpeg';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <div className='navbar'>
      <span className='logo'>
        WhiskChat
      </span>
      <div className='user'>
        <img src={Uttakarshika} alt='' />
        <span> {currentUser.displayName} </span> {/* Update to display current user's name */}
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
