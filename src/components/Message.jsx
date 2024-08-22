import React from 'react'
import Uttakarshika from '../images/uttakarshika.jpeg'
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    
    return(
    <div className='message owner'>
        <div className='messageInfo'>
            <img src={Uttakarshika} alt=''/>
            <span>right now</span>
            </div>
        <div className='messageContent'>
            <p> HEYYYY </p>
            <img src={Uttakarshika} alt=''/>
        </div>
    </div>)
}

export default Message;


