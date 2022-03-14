import React from 'react'
import './Body.css'
import Chip from './Chip'
import VideoCard from './VideoCard'
import mock from './yt-mock-data.json'


const Body = () => {



  const dataset = ["Tony Stark", "All", "CSS", "Routers", "UI", "Trailers",
                "Maps", "Python", "Editing", "Hollywood", "Music",
                  "Loki", "No way Home", "Gamng", "Live", "Hulk",
                  "Maps", "Python", "Editing", "Hollywood", "Music"]

  // console.log(mock);

  return (
    <div className="body">
        <div className="body_chip">
          <hr />
            <div className="chip_list">
            {dataset.map((item, id) => {
                  return <Chip key={id} text={item}/>
                  // console.log(item)
            })}
            </div>
            <hr />
        </div>

        <div className="body_video">
          {mock.map((item, id) => {
                return <VideoCard 
                            key={id}
                            title={item.title}
                            channel={item.channel}
                            views={item.views}
                            time={item.time}
                            imageUrl={item.imageUrl}
                        />
          })}
        </div>

    </div>
  )
}

export default Body