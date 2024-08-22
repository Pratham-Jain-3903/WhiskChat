import React from 'react'
import Navbar from './Navbar';
import Search from './Search';
import Chats  from './Chats';

const Sidebar = () => {
    return(
    <div className='sidebar'> 
    <Navbar/> 
    <Search/>
    <Chats/>
    </div>)
    //chats is a seperate component
    //to avoid refreshing navbar and search bar
    // while chatting 
}

export default Sidebar;