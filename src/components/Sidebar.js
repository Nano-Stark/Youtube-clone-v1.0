import { Explore, Feedback, Help, History, Home, LiveTv, MusicNote, Newspaper, Report, Settings, Sports, Subscriptions, WatchLater, YouTube } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <SidebarOption Icon={Home} title="Home" />
        <SidebarOption Icon={Explore} title="Explore" />
        <SidebarOption Icon={Home} title="Shorts" />
        <SidebarOption Icon={Subscriptions} title="Subcriptions" />
        <hr />
        <SidebarOption Icon={Home} title="Library" />
        <SidebarOption Icon={History} title="History" />
        <SidebarOption Icon={WatchLater} title="Watch later" />
        <SidebarOption Icon={Home} title="Liked videos" />
        <hr />
        <p>SUBSCRIPTIONS</p>
        <SidebarOption Icon={MusicNote} title="Music" />
        <SidebarOption Icon={Sports} title="Sports" />
        <SidebarOption Icon={Home} title="Gaming" />
        <SidebarOption Icon={Newspaper} title="News" />
        <hr />
        <p>MORE FROM YOUTUBE</p>
        <SidebarOption Icon={YouTube} title="Youtube Premium" />
        <SidebarOption Icon={Home} title="Gaming" />
        <SidebarOption Icon={LiveTv} title="Live" />
        <SidebarOption Icon={Sports} title="Sports" />
        <hr />
        <SidebarOption Icon={Settings} title="Settings" />
        <SidebarOption Icon={Report} title="Report History" />
        <SidebarOption Icon={Help} title="Help" />
        <SidebarOption Icon={Feedback} title="Send feedback" />
        <hr />
        

    </div>
  )
}

export default Sidebar