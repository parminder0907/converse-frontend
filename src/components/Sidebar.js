import React from 'react'
import '../styles/Sidebar.css'
import IconButton from '@material-ui/core/IconButton'
import ChatRounded from '@material-ui/icons/ChatRounded'
import DonutLarge from '@material-ui/icons/DonutLarge'
import MoreVert from '@material-ui/icons/MoreVert'
import Search from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import Sidechat from './Sidechat'

const Sidebar = ({user}) => {
  return (
    <div className='side-container'>
      <div className='side-header'>
        <div className='side-header__avatar'>
          <IconButton>
            <Avatar src={user.photo} />
          </IconButton>
          <p className='side-header__name'>{user.uname}</p>
        </div>
        <div className='side-header__right'>
         <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatRounded />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='side-search'>
        <div className='side-search__container'>
          <Search />
          <input type="text" placeholder='Search or start new chat..'/>
        </div>
      </div>

      <div className='side-chats'>
        <h2 className='side-chats__heading'>Chats</h2>
        <Sidechat />
        <Sidechat />
        <Sidechat />
      </div>
    </div>
  )
}

export default Sidebar