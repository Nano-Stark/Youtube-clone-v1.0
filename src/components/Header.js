import { Apps, Menu, Mic, Notifications, Search, VideoCall } from '@mui/icons-material'
import { Avatar, Chip } from '@mui/material'
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header_top">
            <div className="header_left">
                <Menu />
                <img 
                  alt=""
                  className="header_icon"
                  src="https://www.freeiconspng.com/uploads/youtube-logo-png-picture-2.png"
                />
                

            </div>

            <div className="header_center">
                <div className="header_search">
                  <input type='text' />
                  <Search />
                </div>
                <Mic />
            </div>

            <div className="header_right">
                <VideoCall />
                <Apps />
                <Notifications />
                <Avatar />
            </div>
        </div>
          {/* <hr /> */}
        <div className="header_bottom">
            

        </div>
    </div>
  )
}

export default Header