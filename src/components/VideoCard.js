import { CheckCircle } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css'

const VideoCard = ({ title, channel, views, time, imageUrl }) => {
  return (
    <div className="videocard">
        <div className="video_top">
            <img
                alt=""
                className="video_image"
                src={imageUrl}//"https://www.freeiconspng.com/uploads/youtube-logo-png-picture-2.png"
            />
        </div>
        <div className="video_bottom">
            <Avatar className="video_avatar"
                src={imageUrl} />
            <div className="video_bottom_text">
                <p>{title}</p>
                <p>{channel}<span>{" "}<CheckCircle style={{ fontSize: "14px", color: "lightgray" }} /></span></p>
                <p>{views} Views . {time}</p>
            </div>
        </div>

    </div>
  )
}

export default VideoCard