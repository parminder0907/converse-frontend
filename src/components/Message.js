import React from 'react'
import '../styles/Message.css'

const Message = ({ From, Msg, TStamp, myMsg=false }) => {
    // const getSender = (myMsg) => {
    //     return myMsg ? "chat-body__message chat-body__message__my" : "chat-body__message"
    // }
  return (

    <div className={myMsg ? "chat-body__message chat-body__myMsg" : "chat-body__message"}>
        <span className='chat-body__msgfrom'>{From}</span>
        {Msg}
        <span className='chat-body__msgtime-dummy'>{ TStamp }</span>
        <span className='chat-body__msgtime'>{ TStamp }</span>
    </div>
  )
}

export default Message