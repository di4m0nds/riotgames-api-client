import React, { useContext, useEffect, useState } from 'react'
import YouTubeVideo from 'react-youtube'

import ApiYTContext from '../../context/ApiYTContext'

import './style.css'

const GetFreeRotation = ({ summoner }) => {
  const [lives, setLives] = useState(null)
  const { apiGetYTLives } = useContext(ApiYTContext)

  useEffect(() => {
    ;(async () => {
      if (!lives) {
        const result = await apiGetYTLives({ search: 'GAMING ESPORTS' })
        setLives(result)
      }
    })()
  }, [])

  if (!lives) return 'Loading ...'

  console.log(lives)

  return (
    <div className='app-freerotation'>
      <h2 className='app-freerotation_title grid-center'>SPORTS GAMES LIVE</h2>
      <div className='app-freerotation_champs' >
        {lives.map((id, i) => (
          <YouTubeVideo id={i} key={i} videoId={id} className='yt' />
        ))}
      </div>
    </div>
  )
}

export default GetFreeRotation
