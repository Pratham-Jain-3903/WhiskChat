import React from 'react'
import Img from '../images/addProfilePic.png'
import Attachment from '../images/attachment.png'
import SendImage from '../images/send.png'
import { ChatContext } from '../context/ChatContext'
import { arrayUnion, updateDoc } from 'firebase/firestore'
import {db} from "../firebase";
import {v4 as uuid} from "uuid";

const Input = () => {

    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const handleSend = async() => {

        if(img){

        } else {
            await updateDoc(doc(db, "chats", data.chatId),{
                messages: arrayUnion({
                    id: uuid, 
                    text, 
                    senderId:currentUser.uid, 
                    date:Timestamp.now(),

                }),
            });
        }

    }; 

    return(
    <div className='input'> 
       <input type="text" placeholder='Type here' onChange = {e=> setText(e.target.value)}></input>
       <div className='send'>
        <img src={Img} alt=''/>
        <input type='file' style={{display:"none"}} id="file" onChange = {e=> setImg(e.target.files)} />
        <label htmlFor="file">
            <img src={Attachment} alt=""/>
        </label>
         {/* <img src={SendImage} alt="Send" className="send-image"/> */}
        <img src={SendImage} alt="Send" className="send-image" onClick={handleSend} /> 
        { /* <button> Send </button> */}
       </div>
    </div>)
}

export default Input;