import React from 'react'
import YouTubeVideo from 'react-youtube'

const Content = ({ videosIds }) => {
  return (
    <div className='flex'>
      {videosIds.map((id, i) => (
        <YouTubeVideo id={i} key={i} videoId={id} className='helpu' />
      ))}
    </div>
  )
}

export default Content
