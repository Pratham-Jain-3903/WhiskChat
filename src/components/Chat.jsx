import React from 'react'
import call from '../images/call.png'
import add from '../images/plus.png'
import more from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
import {useContext} from 'react';

const Chat = () => {

  const {data} = useContext(ChatContext);

    return(
    <div className='chat'>
        <div className='chatInfo'>
          <span> {data.user?.displayName} </span>
          <div className ="chatIcons"> 
           <img src={call} alt=''/>
           <img src={add} alt=''/>
           <img src={more} alt=''/>
          </div>
        </div>
        <Messages/>
        <Input/>
     </div>)
}

export default Chat;