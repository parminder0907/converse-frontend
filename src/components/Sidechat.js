import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Sidechat.css'
import { Button } from '@material-ui/core'

const Sidechat = () => {
  return (
    <div className='side-chat'>
          <Avatar />
          <div className='side-chat__info'>
            <h3 className='side-chat__nme'>Room Name</h3>  
            <p className='side-chat__msg'>This is a Last message</p>
          </div>
    </div>
  )
}

export default Sidechat