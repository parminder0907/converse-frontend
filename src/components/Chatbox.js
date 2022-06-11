import React, { useState, useEffect, useRef } from 'react'
import '../styles/Chatbox.css'
import axios from '../axios'

import Message from './Message'

import IconButton from '@material-ui/core/IconButton'
import AttachFile from '@material-ui/icons/Send'
import Search from '@material-ui/icons/Search'
import MoreVert from '@material-ui/icons/MoreVert'
import Send from '@material-ui/icons/Send'
import EmojiEmotionsOutlined from '@material-ui/icons/EmojiEmotionsOutlined'
import Mic from '@material-ui/icons/Mic'
import { Avatar } from '@material-ui/core'

const Chatbox = ({ messages }) => {

  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages]);

  const [ input, setInput ] = useState("")

  const submitMessage = (e) => {
    e.preventDefault()

    async function postNewMsg() {
      await axios.post("messages/new", {
        "message": input,
        "uname": "Parminder",
        "timestamp": new Date().toUTCString(),
        "received": true
      })
    }
    
    if(input != "") {
      postNewMsg()
      setInput("")
      chatBodyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='chat-container'>
      <div className='chat-header'>
        <div className='chat-header__avatar'>
          <IconButton>
            <Avatar src="../Photo.jpg" />
          </IconButton>
          <div className='chat-header__info'>
            <h3 className='chat-header__nme'>Room Name</h3>  
            <p className='chat-header__msg'>Last seen at Fri, 5 Aug, 2021</p>
          </div>
        </div>
        <div className='chat-header__right'>
         <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div ref={chatBodyRef} className='chat-body'>
        {
          messages.map( (message) => (
            <Message 
              key={message._id}
              From={message.uname} 
              Msg={message.message}
              TStamp={message.timestamp} 
              myMsg={message.received}/>
          ))
        }
{/*        
        // TEST
        <Message From="Parminder" Msg="hello!!" TStamp={new Date().toUTCString()} />
        <Message From="Parminder" Msg="how are you??" TStamp={new Date().toUTCString()} myMsg="true"/>
        <Message From="Parminder" Msg="how are you??" TStamp={new Date().toUTCString()} myMsg="false"/>

        <Message From="Parminder" Msg="Hey!!" TStamp={new Date().toUTCString()} myMsg="true"/>
        <Message From="Parminder" Msg="hello!!" TStamp={new Date().toUTCString()} />
        <Message From="Parminder" Msg="lorem kjshd sdhskajdh kjhsdk" TStamp={new Date().toUTCString()} myMsg="true"/>
        <Message From="Parminder" Msg="how are you??" TStamp={new Date().toUTCString()} myMsg="false"/>
        <Message From="Parminder" Msg="Hey!!" TStamp={new Date().toUTCString()} myMsg="true"/>
        <Message From="Parminder" Msg="hello!!" TStamp={new Date().toUTCString()} />
        <Message From="Parminder" Msg="how are you??" TStamp={new Date().toUTCString()} myMsg="true"/>
        <Message From="Parminder" Msg="how are you??" TStamp={new Date().toUTCString()} myMsg="false"/> */}
      </div>

      <div className='type-msg'>
        <IconButton>
          <EmojiEmotionsOutlined/>
        </IconButton>
        <div className='type-msg_container'>
          <form type="submit" onSubmit={ submitMessage }>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)} 
              placeholder='Type a message'/>
          </form>
        </div>
        <IconButton>
          <Mic />
        </IconButton>
        <IconButton onClick={ submitMessage }>
          <Send/>
        </IconButton>
      </div>

    </div>
  )
}

export default Chatbox