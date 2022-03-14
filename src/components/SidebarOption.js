import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebar_option">
        <Icon />
        <p>{title}</p>

    </div>
  )
}

export default SidebarOption