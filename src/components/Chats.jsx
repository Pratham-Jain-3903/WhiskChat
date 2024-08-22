import React from 'react'
// import Photo from '../images/user.png'
// import barbie from '../images/barbie.jpg'
import { AuthContext } from '../context/AuthContext'
import { useState } from 'react';
import {useContext} from 'react';



const Chats = () => {

    const [chats, setChats] = useState([])

    const {currentUser} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);

    useEffect(()=>{
    const getChats = () =>{
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
        });

        return () => {
            unsub();
        };  
    };
    
    currentUser.uid && getChats()
    },[currentUser.uid]);
    console.log(Object.entries(chats));
    
    const handleSelect = (u)=>{
        dispatch({type:"CHANGE_USER",payload: u})
    }

    return (
        <div className='chats'>
             {Object.entries(chats)?.map((chat) => (
                <div className='userChat' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <img src={chat[1].userInfo.photoURL} alt='' />
                    <div className='userChatInfo'>
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
        ))}
            </div>
    );
}

export default Chats;