import React from 'react';
import { useEffect, useState } from 'react';
import MessageDetails from './MessageDetails';
import './Message.css'


const Message = () => {
const [messages, setMessages]= useState([])
console.log(messages);

useEffect(()=>{
fetch('http://localhost:4444/api/v1/message/find')
.then(res=>res.json())
.then(data=>setMessages(data))
},[])


    return (
        <div>
            <table>
                   <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Message</th>
                    </tr>               
            {
                messages.map((message,index)=><MessageDetails message={message} key={message.id} index={index}></MessageDetails>)
            }
               
            </table>
        </div>
    );
};

export default Message;