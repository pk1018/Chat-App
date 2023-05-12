/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ChatContext } from '../../context/chatContext';
import { AuthContext } from '../../context/AuthContext';
import useFetchRecepientUser from '../../hooks/useFetchRecepient';
import { Stack } from 'react-bootstrap';
import moment from "moment";

function ChatBox() {
    const {user} = useContext(AuthContext);
    const {currentChat, messages, isMessagesLoading, messagesError} = useContext(ChatContext);
    const recipientUser = useFetchRecepientUser(currentChat, user);

    //console.log(user, currentChat, recipientUser);

    if(!recipientUser.recepientUser){
        return(
            <p style={{textAlign: 'center', width: '100%'}}>
                No converstaion selected yet...
            </p>
        )
    }

    if(isMessagesLoading){
        return(
            <p style={{textAlign: 'center', width: '100%'}}>
                Loading messages...
            </p>
        )
    }

    if(messages.length < 1){
        return(
            <p style={{textAlign: 'center', width: '100%'}}>
                No converstaion selected yet...
            </p>
        )
    }

    console.log(messages);

    return (
        <Stack gap={4} className='chat-box' /*style={{height: "100vh"}}*/>
            <div className="chat-header" style={{color: "white"}}>
                <strong>{recipientUser?.recepientUser?.name}</strong>
            </div>

            <Stack gap={3} className='messages'>
                {messages && messages.map((message, index) => (
                    <Stack key={index} className={`${message?.senderId === user?._id ? "message align-self-start flex-grow-0 mb-5": "message self align-self-end flex-grow-0 mb-5"}`} style={{color: "white"}}>
                        <span>{message.text}</span>
                        <span className='message-footer'>{moment(message.createdAt).calendar()}</span>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default ChatBox;